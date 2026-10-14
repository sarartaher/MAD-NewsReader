Q1: Stack history is [(home)/index, (home)/[id]]. push adds [id] on top.
Q2: router.back() removes [id] and returns to (home)/index.
Q3: With replace(), [id] takes the place of index, so the history is just [(home)/[id]] and there is nothing to go back to.
Q4: { id: "3" } (id is a string, not a number).
