# Convish — Design Specification
## LinkedIn Relationship CRM for Outreach Professionals

---

## Product Overview

Convish is a modern LinkedIn Relationship CRM for freelancers, founders, consultants, and professionals who do serious outreach and networking.

**Core promise:**
> "Never lose track of an important professional relationship."

**What Convish does:**
- Track LinkedIn connections through a visual pipeline
- Manage outreach with structured conversation stages
- Import contacts instantly via LinkedIn PDF upload (AI extracts all fields)
- Schedule and track follow-ups with smart reminders
- Generate AI-powered personalized outreach messages using contact context
- Convert networking efforts into real opportunities

---

## Design Direction

### Overall Aesthetic

**Refined dark-first SaaS.** Think Linear meets Attio. Premium, focused, fast.

The product should feel like a serious professional tool — not a startup landing page, not a student project. Every element earns its place.

**Reference products:**
- Linear — speed, keyboard-first, focused
- Attio — relationship data, clean cards
- Stripe Dashboard — data clarity, professional
- Notion — information density without clutter

### Core Design Principles

| Principle | What It Means |
|---|---|
| Fast | Instant feedback on every action. Skeleton loaders always. Never blank. |
| Focused | Only show what matters right now. No feature clutter. |
| Premium | Feels expensive. Tight spacing. Sharp typography. Subtle depth. |
| Trustworthy | Data-dense but never overwhelming. Clean hierarchy. |
| Human | Warm enough to remind users these are real relationships. |

---

## Color System

### Light Mode (Default)

```
Background:       #F8FAFC  (cool off-white, not pure white)
Surface:          #FFFFFF  (cards, panels)
Surface Elevated: #F1F5F9  (hover states, secondary surfaces)
Border:           #E2E8F0  (subtle, light)
Border Strong:    #CBD5E1  (active elements)

Text Primary:     #0F172A  (near black, strong)
Text Secondary:   #475569  (muted, readable)
Text Muted:       #94A3B8  (placeholders, labels)

Accent Primary:   #4F46E5  (Indigo — buttons, links, active states)
Accent Hover:     #4338CA  (darker indigo on hover)
Accent Light:     #EEF2FF  (indigo tint for badges, highlights)

Success:          #10B981  (green — conversions, completed)
Warning:          #F59E0B  (amber — overdue, attention)
Danger:           #EF4444  (red — delete, critical)
Info:             #3B82F6  (blue — informational)
```

### Dark Mode

```
Background:       #0B0F1A  (deep navy-black)
Surface:          #111827  (card backgrounds)
Surface Elevated: #1E2433  (hover, secondary)
Border:           #1F2937  (subtle dark borders)
Border Strong:    #374151

Text Primary:     #F9FAFB
Text Secondary:   #9CA3AF
Text Muted:       #6B7280

Accent Primary:   #6366F1  (slightly lighter indigo for dark bg)
Accent Hover:     #818CF8
Accent Light:     #1E1B4B  (dark indigo tint)
```

### Stage Colors (Pipeline Badges)

```
Request Sent:        #64748B  (slate)
Connected:           #3B82F6  (blue)
Conversation Started:#8B5CF6  (violet)
Warm Lead:           #F59E0B  (amber)
Follow-Up Needed:    #EF4444  (red)
Client:              #10B981  (green)
Closed:              #94A3B8  (muted gray)
```

---

## Typography

### Font Pairing

```
Display / Headings:  "DM Sans" — modern, geometric, distinct
Body:                "Inter" — clean, highly readable at small sizes
Monospace:           "JetBrains Mono" — code, IDs, timestamps
```

### Scale

```
H1 (Page Titles):    28px / 700 weight / -0.02em tracking
H2 (Section):        20px / 600 weight / -0.01em tracking
H3 (Card Title):     16px / 600 weight / normal tracking
Body Large:          15px / 400 weight / 1.6 line-height
Body:                14px / 400 weight / 1.5 line-height
Small / Label:       12px / 500 weight / 0.02em tracking uppercase
Micro:               11px / 400 weight / muted color
```

---

## Application Layout

### Desktop (1280px+)

```
┌─────────────────────────────────────────────────────┐
│ TOP NAV (64px height, sticky)                       │
│  Page Title    [Search...]    🔔  🌙  Avatar        │
├────────────────┬────────────────────────────────────┤
│ SIDEBAR        │                                    │
│ (240px fixed)  │  MAIN CONTENT AREA                 │
│                │  (scrollable, padded 32px)          │
│  Logo          │                                    │
│  ─────         │                                    │
│  Dashboard     │                                    │
│  Contacts      │                                    │
│  Pipeline      │                                    │
│  Reminders     │                                    │
│  Analytics     │                                    │
│  AI Assistant  │                                    │
│  ─────         │                                    │
│  Billing       │                                    │
│  Settings      │                                    │
│                │                                    │
│  [User Card]   │                                    │
│  [Plan Badge]  │                                    │
└────────────────┴────────────────────────────────────┘
```

### Tablet (768px–1279px)
Sidebar collapses to icon-only (60px width). Labels hidden. Tooltip on hover.

### Mobile (<768px)
Sidebar hidden. Bottom navigation bar with 5 main items. Drawer overlay for full nav.

---

## Sidebar

**Width:** 240px (desktop) / 60px (tablet icon mode) / hidden (mobile)

**Top section:**
- Convish logo + wordmark
- Subtle divider

**Navigation items** (with icons):
- Dashboard
- Contacts
- Pipeline
- Reminders
- Analytics
- AI Assistant
- *(divider)*
- Billing
- Settings

**Active state:** Indigo background fill, white text, left border accent (3px)
**Hover state:** Subtle surface elevated background

**Bottom section:**
- User avatar + name + email (truncated)
- Plan badge (Free / Pro)
- Upgrade button (indigo, full width) — hidden for Pro users

---

## Top Navigation Bar

**Height:** 64px, sticky, subtle bottom border

**Left:** Current page title (H2 weight)

**Center:** Global search bar
- Placeholder: "Search contacts, companies..."
- Keyboard shortcut badge: ⌘K
- Opens command palette on focus

**Right (icon buttons):**
- Notification bell (with unread dot)
- Dark/light mode toggle
- User avatar (opens dropdown: Profile, Settings, Logout)

---

## Dashboard Page

**Purpose:** Answer "What needs my attention right now?"

### Hero Stats Row
4 stat cards in a row:

```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Total        │ │ Active       │ │ Follow-Ups   │ │ Conversion   │
│ Contacts     │ │ Conversations│ │ Due Today    │ │ Rate         │
│              │ │              │ │              │ │              │
│    142       │ │     28       │ │      5       │ │    12%       │
│ ↑ +8 this wk │ │ ↑ +3        │ │ ⚠ 2 overdue  │ │ ↑ +2%       │
└──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘
```

Each card: white surface, soft shadow, large number, small trend indicator with color.

### Pipeline Summary
Horizontal stage bar showing contact counts per stage.
Visual progress bar style. Color-coded per stage.

### Follow-Ups Due Today
List card. Each row:
- Contact avatar (32px circle)
- Name + company
- Days overdue or due today label
- Quick action button: "Follow Up"
- Overdue rows: red left border accent

### Recent Activity Feed
Timeline style list:
- Icon for activity type
- Contact name (bold link)
- Action description
- Relative timestamp (2 hours ago)

### AI Suggestions Widget (Pro)
Small card: "Suggested follow-ups based on your activity"
Shows 2-3 contact suggestions with one-click action.

---

## Contacts Page

### Top Bar
- Page title: "Contacts"
- Search input (full width center)
- Filter chips: Stage / Company / Tags / Import Method
- "Add Contact" button (indigo, right)

### Contacts Table

Columns:
```
[ ] | Avatar + Name | Company | Role | Stage | Last Contacted | Next Follow-Up | Actions
```

- Checkbox for bulk actions
- Avatar: 32px circle with initials fallback
- Name: bold, clickable, opens contact detail
- Stage: colored badge
- Last Contacted: relative date
- Next Follow-Up: date with warning if overdue
- Actions: three-dot menu (Edit, Add Note, Delete)

Row hover: subtle background highlight
Clickable entire row → Contact Detail Page

**Empty state:**
Illustration + "No contacts yet" + "Add Your First Contact" button

---

## Add Contact Modal

**Trigger:** "Add Contact" button

**Step 1 — Choose Method**
Two large option cards side by side:

```
┌─────────────────────────┐  ┌─────────────────────────┐
│  📄 Upload LinkedIn PDF │  │  ✏️  Enter Manually      │
│                         │  │                         │
│  Recommended            │  │  For non-LinkedIn       │
│  AI fills everything    │  │  contacts               │
│  10 seconds             │  │                         │
└─────────────────────────┘  └─────────────────────────┘
```

**Step 2A — PDF Upload Path**
- Drag-and-drop upload zone
- Helper text: "Download from LinkedIn: Profile → More → Save to PDF"
- Upload triggers: loading state "Extracting profile data..."
- Progress indicator during AI extraction

**Step 2B — Review Extracted Data**
Form fields pre-populated:
- Full Name ✓
- Current Role ✓
- Company ✓
- Location ✓
- LinkedIn URL ✓
- Summary (stored as AI context)
- Tags input
- Stage selector
- Notes textarea

Green checkmark on auto-filled fields.
User can edit any field.
"Profile context saved — AI messages will be personalized" info banner.

**Step 2C — Manual Entry Path**
Same form fields without pre-fill.

**Footer buttons:** Cancel / Save Contact

---

## Contact Detail Page

**Most important page in Convish.**

### Layout
Two columns. Left sticky. Right scrollable.

```
┌─────────────────────┬─────────────────────────────────┐
│ LEFT PANEL (320px)  │ RIGHT PANEL (scrollable)         │
│ sticky              │                                  │
│                     │  Activity Timeline               │
│ Profile Photo       │  Notes                          │
│ Name                │  Reminders                      │
│ Headline            │  AI Assistant Panel             │
│ Company / Role      │                                  │
│ Location            │                                  │
│ LinkedIn link       │                                  │
│ Tags                │                                  │
│ Stage badge         │                                  │
│ Import badge        │                                  │
│                     │                                  │
│ [Add Activity]      │                                  │
│ [Set Reminder]      │                                  │
│ [AI Message]        │                                  │
│ [View PDF]          │                                  │
└─────────────────────┴─────────────────────────────────┘
```

### Left Panel Details
- Profile photo: 80px circle, initials fallback with gradient background
- Name: H1 size, bold
- Headline: muted body text
- Company + Role: body text
- Location: small muted with pin icon
- LinkedIn URL: clickable link with external icon
- Tags: pill badges, editable inline
- Stage: large colored badge with dropdown to change
- Import badge: "PDF Import" or "Manual" — small subtle badge
- Quick action buttons: full width, outlined style

### Right Panel — Activity Timeline
Chronological feed (newest first option toggle).

Each activity entry:
```
[Icon] [Timestamp]
       [Content description]
       [Optional note text]
```

Activity type icons:
- 🔗 Connection Sent
- ✅ Connected
- 💬 Message Sent
- 📩 Reply Received
- 🔔 Follow-Up
- 📞 Call
- 🤝 Meeting
- 🎉 Client Converted
- 📄 PDF Imported
- 📝 Note Added

"Add Activity" button at top of timeline.
Activity type selector dropdown.

### Right Panel — Notes Section
Rich text editor (simple — bold, italic, lists only).
Auto-save on blur.
Last edited timestamp shown.

### Right Panel — Reminders Section
List of upcoming reminders for this contact.
Priority badge on each.
"Create Reminder" button.
Complete button on each reminder.

### Right Panel — AI Assistant Panel (Pro)
Three tabs: First Message / Follow-Up / Rewrite

Input context shown (pulled from profile_context):
- Name, Role, Company pre-filled
- Goal input: optional

Generated message in editable textarea.
Copy button. Regenerate button.
"Personalized using LinkedIn profile context" label if PDF was imported.

---

## Pipeline Page

**Full-width Kanban board.**

### Column Headers
Stage name + contact count badge.
Color-coded top border per stage color.

### Contact Cards

```
┌────────────────────────────┐
│ [Avatar] Name              │
│          Company           │
│ ─────────────────────────  │
│ Last: Replied positively   │
│ 📅 Follow-up: Tomorrow     │
└────────────────────────────┘
```

- Avatar 32px
- Name bold
- Company muted
- Last interaction summary (1 line truncated)
- Reminder badge if set (amber for upcoming, red for overdue)
- Click → Contact Detail Page

**Drag and drop:** Smooth animation. Ghost card while dragging. Drop zone highlight.

**Empty column state:** Dashed border, muted text "No contacts in this stage"

---

## Reminders Page

### Three Sections

**Due Today** — highlighted section, red/amber accents
**Upcoming** — next 7 days
**Overdue** — red indicators, shown first within each section

### Reminder Card

```
┌──────────────────────────────────────────────────┐
│ [Avatar] John Smith            [HIGH] [Complete] │
│          Acme Corp                               │
│          Due: Today · Set 3 days ago             │
└──────────────────────────────────────────────────┘
```

Complete button: green on click, row fades out.
Click card → Contact Detail Page.

---

## Analytics Page

### Stat Cards Row (4 cards)
- Total Contacts
- Reply Rate
- Follow-Up Completion Rate
- Conversion Rate

### Charts Section

**Pipeline Distribution** — Horizontal bar chart, color-coded per stage
**Monthly Growth** — Line chart, contacts added over time
**Contact Activity Trends** — Bar chart, activities logged per week

Clean minimal chart style. No chart junk. Tooltips on hover.

**Empty state:** "Not enough data yet — keep tracking your outreach"

---

## AI Assistant Page

**Dedicated AI workspace.**

### Personalized Outreach Generator

Input form:
- Contact Name
- Role
- Company
- Goal (dropdown: Connect / Pitch / Follow-Up / Learn)
- Tone (dropdown: Professional / Friendly / Concise / Carnegie Style)
- Additional context (optional textarea)

Output area:
- Generated message in large textarea
- Word count
- Copy button
- Regenerate button

### Follow-Up Generator
Same layout. Additional input: Days since last contact.

### Message Rewriter
Paste existing message → select tone → get rewritten version.

Tone options:
- Friendlier
- More Professional
- More Concise
- Carnegie Style (empathy-first)

---

## Billing Page

### Pricing Cards (side by side)

```
┌──────────────────────┐  ┌──────────────────────┐
│       FREE           │  │        PRO            │
│       $0/mo          │  │       $9/mo           │
│                      │  │  ★ Most Popular       │
│ • 50 Contacts        │  │ • Unlimited Contacts  │
│ • Basic Pipeline     │  │ • LinkedIn PDF Import │
│ • Manual Reminders   │  │ • AI Messages         │
│ • No AI              │  │ • Email Reminders     │
│                      │  │ • Full Analytics      │
│                      │  │ • CSV Export          │
│ [Current Plan]       │  │ [Upgrade to Pro →]    │
└──────────────────────┘  └──────────────────────┘
```

Pro card: indigo border, slight elevation, "Most Popular" badge.

---

## Settings Page

### Sections

**Profile**
- Avatar upload
- Full name
- Email (read-only if OAuth)

**Preferences**
- Theme toggle (Light / Dark / System)
- Email notifications toggle
- Reminder email time preference

**Integrations**
- OpenAI API key (Pro — bring your own key option)
- Resend configuration

**Danger Zone**
- Delete all contacts
- Delete account
- Both require typed confirmation

---

## Empty States

Every empty page or section needs:
- Simple illustration (abstract, not clipart)
- Clear explanation headline
- Supporting text
- Strong CTA button

Examples:
- Contacts: "No contacts yet" → "Add Your First Contact"
- Pipeline: "Your pipeline is empty" → "Add a Contact"
- Reminders: "No reminders set" → "Set Your First Reminder"
- Analytics: "Not enough data yet" → "Start Tracking"

---

## Loading States

**Always use skeleton loaders. Never blank screens.**

Skeleton style:
- Light gray animated shimmer
- Match exact shape of content being loaded
- Contacts table: skeleton rows
- Stats cards: skeleton number blocks
- Timeline: skeleton activity entries

---

## Component Specifications

### Buttons

```
Primary:    Indigo filled, white text, medium radius (8px)
Secondary:  Outlined, indigo border, indigo text
Ghost:      No border, subtle hover background
Danger:     Red filled
Icon only:  Square, subtle background on hover
```

Sizes: sm (32px) / md (40px) / lg (48px)
All buttons: smooth hover transition (150ms)

### Cards

```
Background: White (light) / #111827 (dark)
Border:     1px solid border color
Radius:     12px
Shadow:     0 1px 3px rgba(0,0,0,0.08)
Padding:    24px
```

Hover (interactive cards): subtle shadow increase, 150ms

### Badges / Tags

Stage badges: colored background, matching text color, 6px radius
Tag pills: surface elevated background, muted text, removable x
Plan badge: indigo (Pro) / gray (Free)

### Form Inputs

```
Height:     40px
Radius:     8px
Border:     1px solid border color
Focus:      Indigo border, subtle indigo shadow ring
```

### Modals

```
Backdrop:   Black 50% opacity
Card:       White, 24px padding, 16px radius
Max width:  560px (form modals) / 800px (detail modals)
Animation:  Fade in + scale up (200ms)
```

---

## Micro Interactions

Required throughout:

- **Hover states:** All interactive elements, 150ms transition
- **Button press:** Subtle scale down (0.97) on active
- **Drag and drop:** Ghost card, drop zone highlight, smooth placement animation
- **Stage change:** Card slides to new column with animation
- **Reminder complete:** Green flash, row fade out
- **PDF upload:** Progress animation during AI extraction
- **Copy button:** Brief "Copied!" tooltip confirmation
- **Page transitions:** Subtle fade between routes
- **Skeleton → content:** Smooth fade in when data loads

---

## Accessibility

- All interactive elements keyboard accessible
- Focus rings visible and styled (indigo)
- Color never the only indicator (always paired with icon or text)
- ARIA labels on icon-only buttons
- Sufficient contrast ratios (WCAG AA minimum)

---

## Overall Goal

When a user opens Convish it should feel like:

**"A modern relationship operating system for serious LinkedIn outreach."**

Not a student project.
Not a generic CRM.
Not another SaaS template.

A focused, premium, fast tool built specifically for people who take their outreach seriously and want to turn professional relationships into real opportunities.

