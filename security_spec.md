# Security Specification & Payload-First Security TDD

## 1. Data Invariants
1. **Owner-Only Write Authority:** Only the verified portfolio owner (`request.auth.token.email == 'aquilapanggabean66@gmail.com'` AND `request.auth.token.email_verified == true`) may create, update, or delete documents in `/achievements`, `/customSections`, and `/siteConfig`.
2. **Published-Only Public Visibility:** Unauthenticated visitors and non-admin signed-in users can ONLY `get` or `list` documents where `resource.data.isPublished == true`. Drafts (`isPublished == false`) are invisible to non-admins.
3. **Strict Schema & No Shadow Fields:** Every create and update enforces exact allowed keys (`hasAll` + `hasOnly` on create, `affectedKeys().hasOnly(...)` on update), strict types, string `.size()` boundaries matching `firebase-blueprint.json`, and bounded array limits (`items.size() >= 1 && items.size() <= 8`).
4. **Protocol & XSS Safety:** Optional external URLs (`proofUrl`) MUST be empty or match `^https://[^\\s]+$`, rejecting `javascript:`, `data:`, and `http:` schemes.
5. **Identity & Temporal Integrity:** `authorUid` must match `request.auth.uid` on create and remain immutable on update. `createdAt` must equal `request.time` on create and remain immutable on update. `updatedAt` must equal `request.time` on both create and update.
6. **Path Variable Hardening:** Every single-document operation (`get`, `create`, `update`, `delete`) enforces `isValidId(docId)` (`^[a-zA-Z0-9_-]+$`, max 128 chars), and `/siteConfig/{configId}` further restricts `configId == 'main'`.

## 2. The "Dirty Dozen" Adversarial Payloads (Must All Be Rejected)
1. **Unauthenticated Achievement Create:** Anonymous client attempts to create `/achievements/ach-1`. -> DENIED (no auth).
2. **Non-Admin Authenticated Write:** Signed-in Google user `attacker@gmail.com` (`email_verified: true`) attempts to create `/achievements/ach-2`. -> DENIED (not owner admin).
3. **Unverified Admin Email Spoof:** Auth token claims `email: 'aquilapanggabean66@gmail.com'` with `email_verified: false`. -> DENIED (`email_verified` gate).
4. **Shadow / Ghost Field Injection:** Owner admin creates an achievement containing an extra undeclared field `isAdminOverride: true`. -> DENIED (`hasOnly` schema blueprint).
5. **Draft Leakage via Public List:** Anonymous client queries `/achievements` without `where('isPublished', '==', true)` attempting to read draft documents (`isPublished: false`). -> DENIED (`allow list: if existing().isPublished == true || isOwnerAdmin()`).
6. **XSS Protocol Injection in Proof URL:** Owner admin submits `proofUrl: "javascript:alert(1)"`. -> DENIED (`^https://` regex check).
7. **ID Poisoning / Resource Exhaustion:** Attempt to create `/achievements/../../../etc/passwd` or a 200-char ID. -> DENIED (`isValidId`).
8. **String Size Overflow (Denial of Wallet):** `summaryEn` length exceeds `420` characters or `titleEn` exceeds `120` characters. -> DENIED (`.size()` limits).
9. **Custom Section Unbounded Array Attack:** Creating a custom section with `items` array of length `9` (exceeds max `8`) or length `0`. -> DENIED (array size guard).
10. **Immutable Field Tampering on Update:** Admin attempts to mutate `createdAt` or `authorUid` during an update of `/achievements/ach-1`. -> DENIED (`affectedKeys().hasOnly(...)` + immutability check).
11. **Backdated Client Timestamp:** Create payload sends a client-fabricated `createdAt` instead of `serverTimestamp()` (`request.time`). -> DENIED (`incoming().createdAt == request.time`).
12. **Arbitrary Singleton Config Path:** Attempt to create `/siteConfig/evil-doc` instead of `/siteConfig/main`. -> DENIED (`configId == 'main'`).
