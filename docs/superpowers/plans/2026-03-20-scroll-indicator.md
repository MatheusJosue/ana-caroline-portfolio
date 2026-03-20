# Scroll Indicator com Patinhas - Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current simple scroll indicator with a glassmorphism container featuring three animated paw icons that light up in sequence.

**Architecture:** Single component modification - the scroll indicator logic lives within the Hero component and uses Framer Motion for animations. No new files or external dependencies needed.

**Tech Stack:** React, Framer Motion (v11.3.8), react-icons (FaPaw)

---

### Task 1: Verify and add necessary imports

**Files:**
- Modify: `components/Hero.tsx`

- [ ] **Step 1: Check existing imports and add FaPaw if missing**

Verify the imports at the top of the file include:

```tsx
import { FaPaw } from 'react-icons/fa'
```

If it's missing, add it to the existing import from 'react-icons/fa' (which already includes FaWhatsapp, FaPaw, FaHeart, FaStar based on line 3).

---

### Task 2: Add state management for paw animation sequence

**Files:**
- Modify: `components/Hero.tsx`

- [ ] **Step 1: Add useState for tracking active paw index**

Add at the top of the Hero component (after existing hooks):

```tsx
const [activePawIndex, setActivePawIndex] = useState(0)
```

- [ ] **Step 2: Add useEffect for animation loop**

Add after the useState declaration:

```tsx
useEffect(() => {
  const interval = setInterval(() => {
    setActivePawIndex((prev) => (prev + 1) % 3)
  }, 900)
  return () => clearInterval(interval)
}, [])
```

This cycles through indices 0 → 1 → 2 → 0 every 900ms (300ms acende + 300ms mantém + 300ms apaga).

---

### Task 2: Create Framer Motion variants for paw states

**Files:**
- Modify: `components/Hero.tsx`

- [ ] **Step 1: Define paw variants before the return statement**

Add after the `pawPositions` array definition:

```tsx
const pawVariants = {
  active: {
    color: '#ad1457',
    opacity: 1,
    scale: 1.1,
    filter: 'drop-shadow(0 0 8px rgba(233, 30, 99, 0.6))',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  inactive: {
    color: 'rgba(173, 20, 87, 0.25)',
    opacity: 0.25,
    scale: 1,
    filter: 'none',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
}
```

---

### Task 4: Replace scroll indicator JSX structure

**Files:**
- Modify: `components/Hero.tsx:273-301`

- [ ] **Step 1: Replace the existing scroll indicator with new glassmorphism design**

Replace the entire scroll indicator section (lines 273-301) with:

```tsx
{/* Scroll indicator */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2, duration: 0.6 }}
  style={{
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  }}
>
  {/* Glassmorphism container with paw icons */}
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    style={{
      width: '60px',
      height: '100px',
      background: 'rgba(255, 255, 255, 0.65)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '16px',
      boxShadow: '0 8px 32px rgba(233, 30, 99, 0.15)',
      padding: '16px 12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
    }}
  >
    {[0, 1, 2].map((index) => (
      <motion.div
        key={index}
        variants={pawVariants}
        initial={false}
        animate={activePawIndex === index ? 'active' : 'inactive'}
      >
        <FaPaw size={18} />
      </motion.div>
    ))}
  </motion.div>

  {/* Text below container */}
  <span
    style={{
      color: '#ad1457',
      fontSize: '0.9rem',
      fontWeight: 500,
      opacity: 0.8,
    }}
  >
    Continue rolando
  </span>
</motion.div>
```

---

### Task 5: Add responsive styles for mobile

**Files:**
- Modify: `components/Hero.tsx`

- [ ] **Step 1: Update globals.css with responsive styles for scroll indicator**

Add to `app/globals.css`:

```css
/* Scroll indicator responsive styles */
@media (max-width: 576px) {
  .scroll-indicator-container {
    --container-width: 50px;
    --container-height: 85px;
    --container-padding: 12px 10px;
    --paw-size: 14px;
  }
}

.scroll-indicator-container {
  --container-width: 60px;
  --container-height: 100px;
  --container-padding: 16px 12px;
  --paw-size: 18px;
}
```

- [ ] **Step 2: Apply CSS variables to scroll indicator**

Update the glassmorphism container style to use CSS variables:

```tsx
style={{
  width: 'var(--container-width)',
  height: 'var(--container-height)',
  background: 'rgba(255, 255, 255, 0.65)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.5)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(233, 30, 99, 0.15)',
  padding: 'var(--container-padding)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
}}
```

And update the paw icons to use:

```tsx
<FaPaw size="var(--paw-size)" />
```

Note: React-icons `size` prop accepts number, so use style instead:

```tsx
<FaPaw style={{ fontSize: 'var(--paw-size)' }} />
```

- [ ] **Step 3: Add className to container for CSS variables**

Add `className="scroll-indicator-container"` to the outer motion.div wrapper.

---

### Task 6: Verify and test

**Files:**
- All modified files

- [ ] **Step 1: Start dev server**

Run: `npm run dev`

- [ ] **Step 2: Verify visual appearance**

Check:
- Container has glassmorphism effect (blur, transparency, border)
- Paw icons animate in sequence (top to bottom, loops)
- Colors match spec (#ad1457 active, rgba(173,20,87,0.25) inactive)
- Glow effect on active paw
- Text "Continue rolando" appears below container

- [ ] **Step 3: Verify animations**

Check:
- Container fades in after 1.2s
- Container has gentle bounce (up/down 8px)
- Paw icons cycle through 0→1→2→0 every 600ms each
- Transitions are smooth (300ms duration)

- [ ] **Step 4: Test responsive behavior**

Resize browser to < 576px width:
- Container becomes 50px × 85px
- Paw icons become 14px
- Layout remains centered and aligned

- [ ] **Step 5: Commit changes**

```bash
git add components/Hero.tsx
git commit -m "feat: redesign scroll indicator with glassmorphism paw icons

- Replace simple arrow/text with glassmorphism container
- Add 3 animated paw icons that light up in sequence
- Implement proper state management with useState/useEffect
- Add responsive sizing for mobile devices
- Maintains existing animation delay timing"
```

---

## Testing Checklist

After implementation, verify:

- [ ] Paw icons cycle continuously without stopping
- [ ] Only one paw is active (highlighted) at a time
- [ ] Glassmorphism effect is visible (blur, border, shadow)
- [ ] Colors match the pink/magenta theme
- [ ] Animation is smooth (no jarr movements)
- [ ] Works on mobile (< 576px)
- [ ] Text "Continue rolando" is readable below container
- [ ] No console errors or warnings
- [ ] Cleanup of interval on unmount works (check memory leak by navigating away)

---

## Files Modified Summary

- `components/Hero.tsx`:
  - Added: `activePawIndex` state
  - Added: `useEffect` for animation loop
  - Added: `pawVariants` object
  - Added: `containerSize` and `pawSize` responsive values
  - Modified: Scroll indicator JSX (lines 273-301)
