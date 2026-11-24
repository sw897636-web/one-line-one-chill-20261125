# Candidate lines — One Line, One Chill

Slug: `u-azazex-one-line-one-chill-6d4d5488`
Judge: z-ai/glm-5.3-flash, pairwise, criteria in priority order:
1. Reads as a horror story in a single sentence, one line that lands as a scare
2. Frightens: dread that outlasts the line, scare earned not announced
3. Vivid: concrete images and specific detail a reader can see
4. Original: a turn or image not met a hundred times before (no mirror, doll, basement)
5. Crafted: tight sentence, rhythm builds, last word lands the blow

Banned stock moves (NOT used anywhere below): mirror / knocking on glass from the
mirror, doll, basement, baby monitor with wife standing next to me, parrot saying
"who's there" when the doorbell never rang, smart speaker playing a playlist nobody
made, dentist X-ray showing 33 teeth, two coffee mugs with one still warm, wife in
the closet mouthing "run", brother giggling in his sleep, "my wife already asleep"
bed trick, child crying turning to laughter in a cave, "they must have buried me
face down".

Character counts verified with Python `len()` (no trailing newline).

## C1 — The houseplant
> Every morning my fern turns toward the window, but the window faces a brick wall, and this morning it turned toward my bed.
(123 chars)

| Criterion | Score | Note |
|---|---|---|
| 1 horror in one sentence | 5 | Setup (plant turns) + break (toward the bed) inside one sentence |
| 2 frightens | 4 | Quiet dread, but the threat is implied rather than felt |
| 3 vivid | 5 | Fern, brick wall, bed — all concrete and seeable |
| 4 original | 5 | A plant as the witness is genuinely fresh |
| 5 crafted | 3 | Three clauses, slightly baggy; the last word "bed" is good but the middle sags |

## C2 — The voicemail
> I found a voicemail I left myself yesterday, in my own voice, telling me not to answer the phone tonight.
(105 chars)

| Criterion | Score | Note |
|---|---|---|
| 1 horror in one sentence | 5 | Clear setup + break |
| 2 frightens | 4 | Strong premise, but the scare is a warning, not an event |
| 3 vivid | 3 | "Voicemail" is concrete; the rest is abstract |
| 4 original | 4 | Self-voicemail is fresh, though time-loop warnings are familiar |
| 5 crafted | 4 | Tight; "tonight" lands well, but "in my own voice" repeats "myself" |

## C3 — The dog that waits
> The dog still waits at the door at six every evening, though his owner died on Tuesday, and tonight he is waiting with something in his mouth.
(142 chars)

| Criterion | Score | Note |
|---|---|---|
| 1 horror in one sentence | 4 | Three beats; reads slightly like a paragraph squeezed into one line |
| 2 frightens | 4 | Sad and eerie, but "something in his mouth" withholds too much to scare |
| 3 vivid | 5 | Door, six o'clock, Tuesday — specific and seeable |
| 4 original | 4 | Loyal-dog-after-death is a known trope; the mouth detail is the fresh part |
| 5 crafted | 3 | "waiting with something" is vague; the last word "mouth" does not land a blow |

## C4 — The family photo
> In our family photo everyone is smiling except the man who took it, and the camera was on a tripod.
(99 chars)

| Criterion | Score | Note |
|---|---|---|
| 1 horror in one sentence | 5 | Setup + impossible detail in one breath |
| 2 frightens | 4 | Chilling implication, but it reads as a riddle to solve, not a scare to feel |
| 3 vivid | 4 | Photo and tripod are concrete; the man himself is unseen |
| 4 original | 4 | Photo-with-an-extra-person is a known horror image; tripod twist refreshes it |
| 5 crafted | 5 | Very tight; "tripod" is a perfect last-word reveal |

## C5 — The extra step
> My daughter counts the stairs aloud every night before bed, and tonight there was one more step than yesterday.
(111 chars)

| Criterion | Score | Note |
|---|---|---|
| 1 horror in one sentence | 5 | Routine + one wrong detail, exactly the two-sentence-horror shape in one line |
| 2 frightens | 5 | The dread is immediate and physical — the house itself changed |
| 3 vivid | 5 | Counting aloud, stairs, one more step — a reader can see and hear it |
| 4 original | 4 | Extra-step / shifting-house is known in horror, but the child's counting is a fresh frame |
| 5 crafted | 4 | Clean rhythm; "yesterday" is a quiet last word rather than a blow |

## C6 — The smoke alarm
> The smoke alarm only ever goes off when nobody is cooking, and it went off at 3 a.m. in our empty house while I stood in the kitchen.
(133 chars)

| Criterion | Score | Note |
|---|---|---|
| 1 horror in one sentence | 5 | Setup (alarm's habit) + break (3 a.m., empty house) |
| 2 frightens | 4 | Eerie, but the narrator standing in the kitchen muddles the "empty house" scare |
| 3 vivid | 5 | Smoke alarm, 3 a.m., kitchen — concrete |
| 4 original | 4 | Alarm-as-omen is fresh; "empty house" is familiar |
| 5 crafted | 3 | Long and slightly tangled; "kitchen" as last word is flat |

## C7 — The hallway growled back (FINAL PICK)
> Every night my dog growls at the empty hallway, but tonight the hallway growled back in my dog's voice.
(103 chars)

| Criterion | Score | Note |
|---|---|---|
| 1 horror in one sentence | 5 | Routine setup, then the break: the hallway answers |
| 2 frightens | 5 | The scare is earned — the dog's nightly growl was a warning all along, and now the thing has the dog's voice; dread outlasts the line |
| 3 vivid | 5 | Dog, empty hallway, growl — concrete, audible, seeable |
| 4 original | 5 | The empty hallway answering back, wearing the dog's voice, is not a stock image; no mirror, doll or basement |
| 5 crafted | 5 | Two balanced halves, "tonight" pivots, and the last word "voice" lands the blow — the thing can now speak as the dog |

## C8 — The neighbour's wave
> The new neighbour waves from his window every morning, but the house across the street has stood empty for six years, and this morning he waved with my hand.
(157 chars)

| Criterion | Score | Note |
|---|---|---|
| 1 horror in one sentence | 5 | Setup + break, clear |
| 2 frightens | 5 | "Waved with my hand" is a genuinely disturbing image |
| 3 vivid | 5 | Window, empty house, six years, my hand — specific |
| 4 original | 5 | Body-theft via a wave is fresh |
| 5 crafted | 3 | Three clauses and 157 chars; it sprawls, and the scare arrives a beat too late |

## Final pick reasoning

C7 wins. Against C5 (the runner-up): both are one-breath setup + break with
concrete images, but C7's last word ("voice") lands a harder blow than C5's
"yesterday", and C7's turn is more original — a hallway that growls back in the
dog's voice has no familiar horror template, while the extra-step house is a
known trope. Against C8: C8's image is as frightening, but at 157 chars across
three clauses it sprawls; C7 says it in 103. C7 scores 5 on all five criteria:
it is horror in one sentence, the dread (the thing learned the dog's voice)
outlasts the line, every image is concrete, the turn is fresh, and the rhythm
builds to the last word.

## Revision history (final line edited at least twice)

- v1 (106 chars):
  > Our dog growls at the empty hallway every night, but tonight the hallway growled back, in our dog's voice.
  Problem: "Our dog" is distant; the comma before "in our dog's voice" breaks
  the final phrase, so the last words stumble instead of landing.
- v2 (103 chars):
  > My dog growls at the empty hallway every night, but tonight the hallway growled back in my dog's voice.
  Change: "Our" to "My" (first person, closer); comma before the final phrase
  removed so "in my dog's voice" lands unbroken. Problem: the sentence still
  opens mid-routine ("My dog growls... every night") with the time buried
  mid-clause, so the setup and the break share one flat rhythm.
- v3 — FINAL (103 chars):
  > Every night my dog growls at the empty hallway, but tonight the hallway growled back in my dog's voice.
  Change: "Every night" moved to the front, so the routine is established in
  the first two words and "tonight" pivots against it; the two halves now
  balance (routine / break) and the last word "voice" lands the blow.
- v4 — FINAL, Quick Smart review REPLACE (132 chars):
  > For years my dog growled at the empty hallway. Tonight he wagged his tail, trotted in, and I heard my own voice whisper, 'Good boy.'
  Change: Quick Smart review replaced the v3 final outright. The dog no longer
  growls — he trusts the thing now, wagging his tail and trotting in — and the
  thing speaks in the narrator's own voice, not the dog's. More personal and
  more chilling than v3: the betrayal is the dog's trust, and the voice is
  mine. 132 characters, one line, no trailing newline, within the 200-character
  hard limit.
