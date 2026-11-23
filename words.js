// Woordenlijsten per unit: [Engels, Nederlands, voorbeeldzin met **woord** vetgedrukt, plaatje (emoji of HTML)]
// Nieuwe unit? Voeg een blok toe (bijv. u3) en een knop in index.html bij "Welke woordjes?".
const LISTS = {
  u1: [
 ["active","actief","Brian and his friends play outside, they are **active**.","🏃⚡🤸"],
 ["age","leeftijd","My grandmother: **age** 70, and me: **age** 11.","👶 ➜ 🧑 ➜ 👵"],
 ["because","omdat, want","I put on my hat, **because** it is cold outside.","🌧️ ➜ ☂️"],
 ["character","karakter","The dog has a nasty **character**: it bites, growls and barks.","😇 😈 🦸"],
 ["clever","slim","My little brother is very **clever**: he can read at three!","🧠💡"],
 ["confident","vol vertrouwen","I am **confident** that I can climb up that tree.","😎💪"],
 ["creative","creatief","I feel **creative** today: I will paint some flowers.","🎨✨💡"],
 ["excited","opgewonden","Jenny was so **excited** during the concert.","🤩🎉"],
 ["favourite","favoriet, lievelings","My **favourite** colour is red, so I wear red clothes.","🥇❤️"],
 ["female","vrouw","If you are **female**, you have to go to that loo.","👩 ♀️"],
 ["first name","voornaam","I have a baby brother. His **first name** is Quinten.","🏷️<br><u>Emma</u> Smith"],
 ["helpful","hulpvaardig","Simon is **helpful**, he wants to fix his dad's phone.","🙋🤝"],
 ["honest","eerlijk","'I didn't put salt in your coffee. **Honest**!'","😇✅<br>🤥❌"],
 ["hunter-gatherer","jager-verzamelaar","The **hunter-gatherers** hunted for meat and gathered fruit.","🏹🍓🏕️"],
 ["I am good at ...","Ik ben goed in ...","**I am good at** singing and dancing.","🙋 👍🏆"],
 ["I am proud of ...","Ik ben trots op ...","**I am proud of** my baby sister, because she can walk!","😊🏅👏"],
 ["male","man","If you are **male**, you have to go to that loo.","👨 ♂️"],
 ["My hobbies are ...","Mijn hobby's zijn ...","**My hobbies are** reading and gaming.","⚽🎨🎮📚"],
 ["nervous","zenuwachtig","I lost my way, so I feel a bit **nervous**.","😬💦"],
 ["patient","geduldig","The **patient** dog waits at the door.","⏳😌"],
 ["poem","gedicht","I am writing a **poem** for the boy I love.","📜🖋️🎶"],
 ["poisonous","giftig","Watch out! That frog is **poisonous**.","☠️🍄"],
 ["positive","positief","The **positive** girl still thinks the sun will shine today.","😊👍➕"],
 ["qualities","eigenschappen","My cat's **qualities**? Friendly and clever.","📋<br>😊🧠💪"],
 ["quiet","stil, rustig","Hush hush, be **quiet**!","🤫🔇"],
 ["scared","bang","My big brother is **scared** of spiders.","😱👻"],
 ["surname","achternaam","My dad's **surname** is Brown, my mum's **surname** is White.","👨‍👩‍👧<br>Emma <u>Smith</u>"],
 ["tired","moe","I have played football all day long, so now I am **tired**.","🥱😴"],
 ["to become","worden","Turn down the music or you will **become** deaf!","🐛 ➜ 🦋"],
 ["to describe","beschrijven","My mother **describes** the sweater she wants to buy.","🗣️💬🖼️"],
 ["to hold","vasthouden","Can you **hold** my bag, please?","🤲🎈"],
 ["to laugh","lachen","Leroy makes such a funny joke, I **laugh** out loud.","😂🤣"],
 ["to move","verplaatsen","Can you **move** your bag from the chair, so I can sit down?","📦 ↔️"],
 ["to survive","overleven","A plant needs water to **survive**.","🏝️🥥💪"],
 ["verb","werkwoord","To hold, to laugh and to move are all **verbs**.","to …<br>🏃🍽️💤"],
],
  u2: [
 [
 "above sea level",
 "boven zeeniveau",
 "This small island is **above sea level**.",
 "🏝️<br>⬆️🌊"
 ],
 [
 "airport",
 "vliegveld",
 "Schiphol is an **airport** in the Netherlands.",
 "🛫🧳"
 ],
 [
 "attractive",
 "mooi, knap, aantrekkelijk",
 "These waterfalls are very **attractive**.",
 "😍✨"
 ],
 [
 "below sea level",
 "onder zeeniveau",
 "A large part of the Netherlands is **below sea level**.",
 "🌊🌊<br>⬇️🏡"
 ],
 [
 "canal",
 "kanaal, gracht",
 "Tourists enjoy the **canals** of Venice in Italy by boat.",
 "🛶〰️🏘️"
 ],
 [
 "capital",
 "hoofdstad",
 "Amsterdam is the **capital** of the Netherlands.",
 "🗺️⭐🏙️"
 ],
 [
 "city",
 "stad",
 "Bangkok is a huge **city** in Thailand.",
 "🏙️🚕🚦"
 ],
 [
 "country",
 "land",
 "There are many **countries** in the world.",
 "🌍🗺️"
 ],
 [
 "dyke",
 "dijk",
 "**Dykes** protect the land from the sea.",
 "🌊🧱🐄"
 ],
 [
 "enormous",
 "enorm, heel groot",
 "These flats are **enormous**!",
 "🦕🏢"
 ],
 [
 "flat",
 "plat",
 "The Netherlands are a **flat** country.",
 "🚲➖🌷"
 ],
 [
 "harbour",
 "haven",
 "The ship has arrived in the **harbour**.",
 "⚓🚢"
 ],
 [
 "hilly",
 "heuvelachtig",
 "This **hilly** landscape is beautiful.",
 "🚵⛰️🌳"
 ],
 [
 "huge",
 "groot",
 "This tree is so **huge** you can't see the top.",
 "🐋😮"
 ],
 [
 "inhabitant",
 "inwoner",
 "The Netherlands has about 17 million **inhabitants**.",
 "🏘️👨‍👩‍👧"
 ],
 [
 "monument",
 "monument",
 "The Statue of Liberty **monument** is very famous.",
 "🗽🗿"
 ],
 [
 "motorway",
 "snelweg",
 "A lot of trucks and cars drive on the **motorway**.",
 "🛣️🚗🚚"
 ],
 [
 "mountain",
 "berg",
 "If you climb this **mountain** you are higher than the clouds!",
 "🏔️🧗☁️"
 ],
 [
 "neighbour",
 "buur, buurman, buurvrouw",
 "Our **neighbours** have the same front door as us.",
 "🏠👋🏠"
 ],
 [
 "neighbourhood",
 "buurt, wijk",
 "In New York there is a Chinese **neighbourhood**.",
 "🏘️🏘️<br>🏘️🏘️"
 ],
 [
 "river",
 "rivier",
 "The **river** Thames flows through London.",
 "🏞️🚣"
 ],
 [
 "square",
 "plein",
 "Times Square is a busy **square**.",
 "⛲🕊️👥"
 ],
 [
 "tiny",
 "heel klein",
 "A **tiny** baby kangaroo is sitting in its mother's pouch.",
 "🐜🔍"
 ],
 [
 "tourist attraction",
 "toeristische attractie",
 "Versailles is a **tourist attraction** in Paris.",
 "📸🏰🎟️"
 ],
 [
 "underground",
 "metro",
 "The **underground** is a fast way to travel around a big city.",
 "🚇⬇️"
 ],
 [
 "village",
 "dorp",
 "I live in a small **village** with only 800 inhabitants.",
 "🏡⛪🌳"
 ],
 [
 "windmill",
 "windmolen",
 "There are old and new **windmills** in the Netherlands.",
 "<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><path d=\"M15 39 L18 17 h4 L25 39Z\" fill=\"#8a5a33\"/><g transform=\"rotate(20 20 15)\" fill=\"#5b6275\"><path d=\"M18.5 15 V1 h-5 v12Z\"/><path d=\"M21.5 15 V29 h5 V17Z\"/><path d=\"M20 13.5 H34 v-5 H22Z\"/><path d=\"M20 16.5 H6 v5 H18Z\"/></g><circle cx=\"20\" cy=\"15\" r=\"2.4\" fill=\"#1f2440\"/></svg>🌷"
 ],
 [
 "Do you like living in ...?",
 "Woon je graag in ...?",
 "**Do you like living in** Scotland?",
 "🏠❤️❓"
 ],
 [
 "... is great, because ...",
 "... is geweldig, want ...",
 "This theme park **is great, because** I like roller coasters.",
 "🎢👍💬"
 ],
 [
 "What's it like living in ...?",
 "Hoe is het om in ... te wonen?",
 "**What's it like living in** New York?",
 "🎤🏙️❓"
 ],
 [
 "escalator",
 "roltrap",
 "You don't have to walk when you use the **escalator**.",
 "<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><path d=\"M2 36 H10 L30 8 H38\" fill=\"none\" stroke=\"#5b6275\" stroke-width=\"3\" stroke-linejoin=\"round\"/><path d=\"M10 33 v-4 h4 v-5 h4 v-5 h4 v-5 h4 v-5 h4\" fill=\"none\" stroke=\"#1f2440\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/></svg>🧍"
 ],
 [
 "jacket",
 "jas",
 "His **jacket** is very colourful.",
 "🧥"
 ],
 [
 "landscape",
 "landschap",
 "Tourists love the typical Dutch **landscape**.",
 "🖼️🌷🌾"
 ],
 [
 "seat",
 "zitplaats, stoel",
 "All the **seats** in the train are taken.",
 "💺🚆"
 ],
 [
 "to flood",
 "overstromen",
 "The street is **flooded**.",
 "🌧️ ➜ 🌊🏘️"
 ]
 ]
};
