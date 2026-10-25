// CRAZY PHYSIOLOGY 🧠💜 — complete script.js
// 10 topics × 3 difficulty levels × 10 questions = 300 quiz questions.

const makeQ = (q, answer, wrong1, wrong2, wrong3) => ({
  q, options: [answer, wrong1, wrong2, wrong3], answer
});

const categories = [
  {
    id: "love", icon: "❤️", title: "Love & Relationships",
    meaning: "Explore emotions, friendship, trust, empathy, communication, and healthy boundaries.",
    facts: ["Listening carefully helps people feel heard.", "Empathy means trying to understand another person's feelings.", "Healthy friendships allow people to have different opinions.", "Trust is built through reliable actions over time."],
    levels: {
      easy: [
        makeQ("What helps build a healthy friendship?", "Trust", "Dishonesty", "Fear", "Control"),
        makeQ("What does empathy mean?", "Trying to understand another person's feelings", "Winning every argument", "Ignoring emotions", "Always agreeing"),
        makeQ("Which is kind communication?", "Listening carefully", "Interrupting constantly", "Mocking someone", "Shouting over others"),
        makeQ("What should you do when someone says no?", "Respect their answer", "Keep pressuring them", "Laugh at them", "Ignore their boundary"),
        makeQ("Which feeling may occur when you miss a friend?", "Sadness", "Thirst", "Hunger only", "Sleepiness only"),
        makeQ("What does an apology usually express?", "Regret for a mistake", "A demand for a prize", "A way to blame everyone", "A competition"),
        makeQ("What can help solve a disagreement?", "Calm discussion", "Insults", "Spreading rumors", "Refusing to listen"),
        makeQ("What does kindness involve?", "Treating others with care", "Making others feel small", "Breaking promises on purpose", "Ignoring everyone"),
        makeQ("Can friends have different opinions?", "Yes, and still respect each other", "No, never", "Only if they argue", "Only if one wins"),
        makeQ("What is a boundary?", "A limit someone communicates", "A type of food", "A school subject", "A competition")
      ],
      medium: [
        makeQ("Why is active listening useful?", "It helps people feel heard and understood", "It guarantees agreement", "It removes every difficult feeling", "It means obeying everything"),
        makeQ("Which response shows empathy?", "That sounds difficult; would you like to talk?", "You are overreacting", "Your problem is silly", "I never want to hear that"),
        makeQ("How can someone handle jealousy constructively?", "Recognize the feeling and communicate respectfully", "Control another person's friendships", "Spread rumors", "Claim ownership of a person"),
        makeQ("Why are clear boundaries useful?", "They help people understand each other's limits", "They let one person control everyone", "They prevent every disagreement", "They mean friends cannot talk"),
        makeQ("What distinguishes an apology from an excuse?", "An apology accepts responsibility; an excuse may avoid it", "They always mean the same thing", "An apology blames the other person", "An excuse always repairs harm"),
        makeQ("Why can texts be misunderstood?", "They may lack tone and facial cues", "Texts always contain lies", "People cannot read words", "Phones remove memory"),
        makeQ("Which behavior shows mutual respect?", "Both people can share their views", "Only one person may speak", "One person decides every rule", "Mistakes are always mocked"),
        makeQ("What can help rebuild trust?", "Consistent honest actions over time", "Demanding instant forgiveness", "Hiding more information", "Blaming the hurt person"),
        makeQ("What does consent mean?", "Freely given agreement that can be changed", "Agreement forced by pressure", "Silence that always means yes", "Permission that cannot be withdrawn"),
        makeQ("Why can friendships change over time?", "People and circumstances develop", "Friendship expires after a month", "One disagreement erases all memories", "Friends must like the same things")
      ],
      hard: [
        makeQ("Which is emotional regulation?", "Pausing, naming a feeling, and choosing a response", "Pretending emotions never happen", "Blaming others for every reaction", "Acting on every impulse"),
        makeQ("What distinguishes empathy from sympathy?", "Empathy understands a perspective; sympathy expresses concern", "Empathy means agreeing with everything", "Sympathy solves every problem", "They are always opposites"),
        makeQ("Why is reciprocity important in friendship?", "Care and effort are shared rather than one-sided", "Friends exchange identical gifts", "Friends have identical personalities", "It prevents all differences"),
        makeQ("Which is a healthy conflict-repair attempt?", "Name the harm, listen, take responsibility, and plan next steps", "Demand instant forgetting", "Bring up unrelated mistakes", "Use silence to force agreement"),
        makeQ("What is a cognitive bias?", "A mental tendency that can distort judgment", "A guaranteed sign of dishonesty", "A measurement of kindness", "A type of muscle"),
        makeQ("Why consider both intent and impact?", "Good intent does not automatically remove harmful impact", "Impact never matters", "Intent can never be discussed", "Neither matters"),
        makeQ("How should you interpret an uncertain social signal?", "Avoid assumptions and communicate respectfully", "Treat one gesture as proof", "Spread a rumor", "Decide what someone feels without asking"),
        makeQ("Which pattern suggests an unhealthy imbalance?", "One person repeatedly ignores the other's needs and limits", "Both people sometimes disagree", "Both people have separate hobbies", "Friends sometimes need time alone"),
        makeQ("How is forgiveness different from rebuilding trust?", "Forgiveness is personal; trust also depends on later behavior", "Forgiveness requires immediate closeness", "Trust never changes", "Both mean forgetting everything"),
        makeQ("What makes feedback constructive?", "It is specific, respectful, and focused on behavior", "It attacks identity", "It humiliates someone publicly", "It gives no path to improve")
      ]
    }
  },
  {
    id: "body", icon: "🫀", title: "The Human Body",
    meaning: "Learn how organs, muscles, bones, and body systems work together.",
    facts: ["The skin is the body's largest organ.", "The heart pumps blood around the body.", "Bones support the body and protect some organs.", "The lungs exchange oxygen and carbon dioxide."],
    levels: {
      easy: [
        makeQ("Which organ pumps blood?", "Heart", "Liver", "Stomach", "Kidney"),
        makeQ("Which organs help you breathe?", "Lungs", "Ears", "Intestines", "Pancreas"),
        makeQ("What protects the brain?", "Skull", "Ribs", "Pelvis", "Kneecap"),
        makeQ("Which body part helps you see?", "Eyes", "Elbows", "Lungs", "Kidneys"),
        makeQ("What connects muscles to bones?", "Tendons", "Ligaments", "Nerves", "Arteries"),
        makeQ("Which organ uses acid and enzymes to help digest food?", "Stomach", "Heart", "Bladder", "Lungs"),
        makeQ("What carries messages between the brain and body?", "Nerves", "Hair", "Nails", "Cartilage only"),
        makeQ("Which organs filter blood to make urine?", "Kidneys", "Lungs", "Ears", "Shoulders"),
        makeQ("What is the body's outer protective covering?", "Skin", "Bone marrow", "Hair only", "Heart"),
        makeQ("What structures help support your body?", "Bones", "Taste buds", "Eyelashes", "Saliva")
      ],
      medium: [
        makeQ("What is a main job of red blood cells?", "Carry oxygen using hemoglobin", "Produce bile", "Digest stomach proteins", "Make urine"),
        makeQ("Where does most nutrient absorption occur?", "Small intestine", "Esophagus", "Mouth", "Large intestine"),
        makeQ("What do platelets help do?", "Form blood clots", "Carry most oxygen", "Break down light", "Control hearing"),
        makeQ("Which muscle pumps blood continuously?", "Cardiac muscle", "Skeletal muscle only", "Iris muscle only", "Tendon tissue"),
        makeQ("What happens to the diaphragm during inhalation?", "It contracts and moves downward", "It closes the windpipe", "It pumps blood", "It filters urine"),
        makeQ("What does the large intestine mainly help with?", "Absorbing water and forming stool", "Absorbing most nutrients", "Pumping oxygen", "Making urine"),
        makeQ("Which system produces hormones?", "Endocrine system", "Skeletal system", "Integumentary system only", "Digestive tract only"),
        makeQ("What is cartilage?", "Flexible connective tissue", "A blood cell", "A digestive enzyme", "A hormone"),
        makeQ("What is a role of white blood cells?", "Help defend against infection", "Carry oxygen as their main job", "Store bile", "Move bones directly"),
        makeQ("What does the esophagus do?", "Moves swallowed food toward the stomach", "Filters blood", "Exchanges gases", "Produces urine")
      ],
      hard: [
        makeQ("What is homeostasis?", "Maintaining relatively stable internal conditions", "Stopping every body process", "Increasing temperature without limit", "Making every cell identical"),
        makeQ("What happens in a reflex arc?", "A rapid pathway produces a response, often before conscious awareness", "The stomach digests all food instantly", "Bones send hormones through tendons", "The heart stops to save energy"),
        makeQ("What is the kidney's functional filtering unit?", "Nephron", "Alveolus", "Neuron", "Osteon"),
        makeQ("How does the diaphragm help inhalation?", "It contracts, increasing chest cavity volume", "It relaxes and forces air in", "It closes the lungs", "It pushes food into the stomach"),
        makeQ("What is an alveolus?", "A tiny air sac where gases are exchanged", "A kidney filter", "A bone joint", "A heart valve"),
        makeQ("Which vessels usually carry blood away from the heart?", "Arteries", "Veins", "Lymph nodes", "Bronchi"),
        makeQ("What is the main role of the liver in digestion?", "It produces bile that helps process fats", "It pumps blood", "It exchanges gases", "It stores urine"),
        makeQ("What is a neuron?", "A specialized nerve cell", "A type of bone", "A digestive acid", "A blood vessel"),
        makeQ("What is the main role of the immune system?", "Protect the body from pathogens and abnormal cells", "Digest every nutrient", "Move the skeleton", "Produce sound"),
        makeQ("What is a synapse?", "A junction where a neuron communicates with another cell", "A joint between two bones", "A lung air sac", "A kidney tube")
      ]
    }
  },
    {
    id: "dreams", icon: "🌙", title: "Dreams & Sleep",
    meaning: "Discover sleep stages, dreaming, circadian rhythms, and rest.",
    facts: ["Sleep includes REM and non-REM stages.", "Dreams can occur during different sleep stages.", "Circadian rhythms help coordinate the sleep-wake cycle.", "Sleep supports attention, learning, and health."],
    levels: {
      easy: [
        makeQ("What is sleep?", "A natural state of rest with changing brain activity", "Permanent loss of consciousness", "A type of digestion", "A disease everyone has"),
        makeQ("When do many vivid dreams occur?", "During REM sleep", "Only while awake", "Only during exercise", "Only during meals"),
        makeQ("What is a dream?", "An experience or imagery during sleep", "A guaranteed prediction", "A blood-type test", "A bone movement"),
        makeQ("What helps your body track sleep timing?", "Circadian rhythms", "Fingerprints", "Tooth enamel", "Hair color"),
        makeQ("Which habit can support sleep?", "Keeping a regular bedtime", "Caffeine just before bed", "Changing bedtime wildly every day", "Bright lights all night"),
        makeQ("Can people forget dreams?", "Yes", "No, never", "Only adults can", "Only after eating"),
        makeQ("What is a nightmare?", "A frightening dream", "A type of muscle", "A sleep tool", "A digestive organ"),
        makeQ("Which system helps coordinate sleep timing?", "Nervous system", "Skeleton only", "Digestive system only", "Hair follicles"),
        makeQ("Does everyone dream in the same way?", "No, experiences vary", "Yes, every dream is identical", "Only children dream", "Only people who remember dream"),
        makeQ("Why is sleep important?", "It supports health, attention, and learning", "It makes food unnecessary", "It stops all brain activity", "It replaces water")
      ],
      medium: [
        makeQ("What does REM stand for?", "Rapid eye movement", "Resting energy mode", "Repeated emotional memory", "Reduced eye metabolism"),
        makeQ("Which hormone helps signal darkness to the body?", "Melatonin", "Insulin", "Adrenaline only", "Hemoglobin"),
        makeQ("What is sleep inertia?", "Temporary grogginess after waking", "A dream prediction", "Permanent memory loss", "A digestive stage"),
        makeQ("What is a circadian rhythm?", "An approximately 24-hour biological cycle", "A heart-valve rhythm only", "A yearly process", "A bone-growth type"),
        makeQ("What may happen after insufficient sleep?", "It may become harder to focus", "Attention always improves", "Distractions stop mattering", "Everyone reacts identically"),
        makeQ("Which is associated with non-REM sleep?", "Physical restoration and memory processes", "Complete brain inactivity", "No dreams ever", "Breathing stops in healthy sleep"),
        makeQ("Why can bright light late at night affect sleep?", "It can influence the circadian clock", "It permanently changes eye color", "It stops all hormones", "It removes sleep needs"),
        makeQ("What is sleep deprivation?", "Not getting enough sleep", "Having a regular bedtime", "Remembering a dream", "Waking after a full night"),
        makeQ("Why do sleep needs vary?", "Age and individual biology affect needs", "Everyone needs exactly the same amount", "Height alone determines needs", "Only eye color matters"),
        makeQ("What is sleep paralysis?", "A brief inability to move when falling asleep or waking", "A broken bone during sleep", "A digestion stage", "Permanent inability to walk")
      ],
      hard: [
        makeQ("What is associated with slow-wave sleep?", "Deep sleep processes linked to restoration and memory", "Full awareness of every sound", "Total absence of brain activity", "Permanent immune shutdown"),
        makeQ("What is the suprachiasmatic nucleus?", "A brain region important for circadian timing", "A heart chamber", "A part of the intestine", "A blood cell"),
        makeQ("How can sleep support memory consolidation?", "It helps stabilize and reorganize some learned information", "It erases every memory", "It stores memories in the stomach", "It makes practice unnecessary"),
        makeQ("What is a sleep spindle?", "A brief burst of brain activity during NREM sleep", "A lung structure", "A foot muscle", "A dream character"),
        makeQ("What is the homeostatic sleep drive?", "Sleep pressure that builds during wakefulness", "A mechanism preventing sleep forever", "A signal made only by dreams", "A measure of eye color"),
        makeQ("Why can jet lag occur?", "The internal clock is misaligned with local time", "The body loses digestion", "The lungs stop exchanging gases", "The brain permanently forgets language"),
        makeQ("What is lucid dreaming?", "Knowing you are dreaming while still dreaming", "Remembering every childhood event", "Sleepwalking while fully awake", "Predicting exact future events"),
        makeQ("Which chemical is involved in sleep-wake regulation?", "Orexin", "Keratin", "Collagen", "Bile"),
        makeQ("Why can a consistent wake-up time help?", "It helps anchor the circadian schedule", "It guarantees identical dreams", "It prevents all nighttime waking", "It replaces darkness"),
        makeQ("Why should dream-symbol interpretations be treated cautiously?", "There is no reliable universal key to every dream symbol", "Dreams never contain emotion", "All cultures dream identically", "Dreams occur only in REM")
      ]
    }
  },
  {
    id: "space", icon: "🌌", title: "Space & Astronomy",
    meaning: "Explore planets, stars, galaxies, gravity, and the cosmos.",
    facts: ["The Sun is a star at the center of our solar system.", "Sunlight takes about eight minutes to reach Earth.", "Galaxies contain stars, gas, dust, and dark matter.", "The Moon reflects sunlight."],
    levels: {
      easy: [
        makeQ("What is the star at the center of our solar system?", "The Sun", "Sirius", "Polaris", "The Moon"),
        makeQ("Which planet do we live on?", "Earth", "Mars", "Venus", "Jupiter"),
        makeQ("What naturally orbits Earth?", "The Moon", "Saturn", "A galaxy", "A comet every day"),
        makeQ("Which planet is famous for its rings?", "Saturn", "Mercury", "Earth", "Mars"),
        makeQ("What helps keep planets in orbit?", "Gravity", "Sound", "Wind", "Rain"),
        makeQ("Which planet is called the Red Planet?", "Mars", "Neptune", "Venus", "Uranus"),
        makeQ("What is a galaxy?", "A huge system of stars and other matter", "A single moon", "An Earth cloud", "A small rock only"),
        makeQ("Does the Moon make its own visible light?", "No, it reflects sunlight", "Yes, like the Sun", "Only during eclipses", "Only in winter"),
        makeQ("Which is the largest planet in our solar system?", "Jupiter", "Mercury", "Mars", "Venus"),
        makeQ("What is an astronaut?", "A person trained for spaceflight", "A star type", "A space rock", "A telescope lens")
      ],
      medium: [
        makeQ("Why does Earth have seasons?", "Its axial tilt as it orbits the Sun", "It moves much closer to the Sun every summer", "The Moon directly changes temperature", "The Sun switches off in winter"),
        makeQ("What is a light-year?", "The distance light travels in one year", "A star's lifetime", "Brightness only", "The Moon's age"),
        makeQ("What causes a solar eclipse?", "The Moon passes between Earth and the Sun", "Earth passes between Mars and Jupiter", "The Sun passes behind Earth", "Jupiter blocks the Moon monthly"),
        makeQ("What is a comet largely made of?", "Ice, dust, and rocky material", "Only liquid iron", "Pure sunlight", "Living plants"),
        makeQ("What is the Milky Way?", "The galaxy containing our solar system", "A planet around Saturn", "An asteroid", "A constellation of three stars"),
        makeQ("Why do astronauts seem weightless in orbit?", "They and their spacecraft are in continuous free fall", "There is no gravity anywhere in space", "Their bodies lose mass", "The Sun pushes them upward"),
        makeQ("What is an asteroid?", "A small rocky body orbiting the Sun", "A type of galaxy", "A cloud on Earth", "A star that has no light"),
        makeQ("What causes lunar phases?", "We see different portions of the Moon's sunlit half", "Earth's shadow covers the Moon every night", "The Moon changes shape", "Clouds cut pieces from the Moon"),
        makeQ("What is a telescope used for?", "Collecting light or other signals from distant objects", "Changing planets' orbits", "Creating stars", "Making space objects closer physically"),
        makeQ("What is a constellation?", "A pattern of stars as seen from Earth", "A single planet", "A type of rocket engine", "A group of planets physically touching")
      ],
      hard: [
        makeQ("What is the main source of the Sun's energy?", "Nuclear fusion in its core", "Burning oxygen like a fire", "Chemical reactions with coal", "Friction with Earth"),
        makeQ("What is the event horizon of a black hole?", "A boundary beyond which light cannot escape to distant observers", "The surface of a normal planet", "The brightest part of a comet", "The orbit of Earth's Moon"),
        makeQ("What does redshift in distant galaxies often indicate?", "Their light wavelengths are stretched, often by cosmic expansion", "They are made only of red material", "They have stopped moving", "They are inside Earth's atmosphere"),
        makeQ("What is a nebula?", "A cloud of gas and dust in space", "A kind of moon crater only", "A small ocean on Mars", "A type of telescope"),
        makeQ("What is a neutron star?", "A very dense remnant of a massive star", "A newly formed planet", "A small comet", "A star made of ordinary ice"),
        makeQ("What is the asteroid belt located between?", "Mars and Jupiter", "Earth and Mars", "Saturn and Uranus", "Mercury and Venus"),
        makeQ("What is the cosmic microwave background?", "Radiation left over from the early universe", "Radio signals from Earth's kitchens", "Light produced only by the Moon", "Heat from Jupiter's storms"),
        makeQ("What is an exoplanet?", "A planet orbiting a star beyond our solar system", "A moon orbiting Earth", "A star without planets", "A comet outside the asteroid belt"),
        makeQ("Why can we see stars as they were in the past?", "Their light takes time to travel to us", "Stars always show the future", "Space reverses time", "Telescopes stop light"),
        makeQ("What is a supernova?", "A powerful explosion associated with certain stellar deaths", "A planet's daily rotation", "A moon phase", "A small meteor shower only")
      ]
    }
  },
      {
    id: "nature", icon: "🌿", title: "Nature & Animals",
    meaning: "Discover ecosystems, animal behavior, plants, adaptation, and biodiversity.",
    facts: ["Plants use photosynthesis to make sugars from light energy.", "Pollinators help many plants reproduce.", "Ecosystems include living things and their environment.", "Adaptations can help organisms survive and reproduce."],
    levels: {
      easy: [
        makeQ("What do plants absorb from sunlight for photosynthesis?", "Light energy", "Sound waves", "Moon rocks", "Salt only"),
        makeQ("Which animal is a mammal?", "Dog", "Frog", "Trout", "Butterfly"),
        makeQ("What do bees often collect from flowers?", "Nectar and pollen", "Pebbles", "Fish scales", "Snow"),
        makeQ("What do herbivores mainly eat?", "Plants", "Meat only", "Metal", "Rocks only"),
        makeQ("What is a habitat?", "A place where an organism lives", "A type of tooth", "An animal's birthday", "A weather instrument"),
        makeQ("Which gas do plants take in for photosynthesis?", "Carbon dioxide", "Helium", "Neon", "Hydrogen only"),
        makeQ("What is a baby frog called during its early aquatic stage?", "Tadpole", "Cub", "Chick", "Puppy"),
        makeQ("Which animal is known for building dams?", "Beaver", "Giraffe", "Penguin", "Camel"),
        makeQ("What do roots often absorb from soil?", "Water and minerals", "Sunlight directly", "Birdsong", "Oxygen from stars"),
        makeQ("What is biodiversity?", "The variety of life in an area or on Earth", "The speed of one animal", "A type of cloud", "The age of a tree")
      ],
      medium: [
        makeQ("What is a food chain?", "A sequence showing who eats whom", "A chain made of vegetables", "A list of weather events", "A map of rivers only"),
        makeQ("What is a producer in an ecosystem?", "An organism that makes its own food, often using light", "An animal that eats only meat", "A rock that stores heat", "A predator at the top"),
        makeQ("What is camouflage?", "Features that help an organism blend into surroundings", "A way to make rain", "A kind of digestion", "A plant's root system"),
        makeQ("Why are decomposers important?", "They break down dead matter and recycle nutrients", "They stop all plant growth", "They create sunlight", "They remove gravity"),
        makeQ("What is migration?", "Seasonal or other movement between areas", "A type of leaf", "A way to digest stones", "A permanent change in species"),
        makeQ("What is pollination?", "Transfer of pollen to a flower's receptive part", "Water moving into roots only", "Leaves falling in autumn", "Seeds turning into rocks"),
        makeQ("What is an invasive species?", "A non-native species that spreads and causes harm", "Any endangered native species", "A species that never reproduces", "An animal that sleeps in winter"),
        makeQ("What is mutualism?", "An interaction in which both species benefit", "A relationship where both always lose", "A kind of weather", "A type of rock"),
        makeQ("Why are wetlands ecologically valuable?", "They can support wildlife, filter water, and reduce flooding", "They contain no living organisms", "They stop the water cycle", "They cannot store water"),
        makeQ("What is an adaptation?", "An inherited trait that can improve survival or reproduction", "A temporary thought", "A change made by every individual on purpose", "A type of fossil")
      ],
      hard: [
        makeQ("What is ecological succession?", "Change in community composition over time", "A single animal learning a trick", "The daily rising of the Sun", "Water freezing in a cup"),
        makeQ("What does carrying capacity mean?", "The population size an environment can sustainably support", "The number of animals that can fly", "The weight of one tree", "A measure of rainfall only"),
        makeQ("What is a keystone species?", "A species with a disproportionately large ecosystem effect", "The most numerous species in every habitat", "A species that eats only stones", "A species with no predators"),
        makeQ("What is biomagnification?", "Increasing concentration of certain pollutants up a food chain", "A plant growing taller in sunlight", "Water evaporating from leaves", "An animal changing color seasonally"),
        makeQ("What is genetic variation important for in populations?", "It provides differences on which natural selection can act", "It guarantees every organism survives", "It prevents inheritance", "It makes all offspring identical"),
        makeQ("What is an ecological niche?", "A species' role and way of using resources in its environment", "Only the place where it sleeps", "The color of its fur", "The age of a fossil"),
        makeQ("What is primary succession?", "Community development where soil is initially absent", "Recovery in a mature forest after every rain", "A seasonal migration", "An animal learning to hunt"),
        makeQ("What does a high trophic level usually mean?", "The organism feeds higher in a food web", "The organism is always the largest", "The organism makes sunlight", "The organism cannot be eaten"),
        makeQ("What is a limiting factor in ecology?", "Something that restricts population growth", "A trait that always increases population", "A type of animal call", "A food that never runs out"),
        makeQ("Why can habitat fragmentation threaten wildlife?", "It separates populations and reduces connected habitat", "It always creates more breeding space", "It stops all predators", "It guarantees greater genetic diversity")
      ]
    }
  },
  {
    id: "psychology", icon: "🧠", title: "Psychology & Behavior",
    meaning: "Understand thinking, emotions, habits, attention, and human behavior.",
    facts: ["Emotions can influence attention and decisions.", "Habits often develop through repeated behavior and cues.", "People can interpret the same situation differently.", "Psychology studies behavior and mental processes."],
    levels: {
      easy: [
        makeQ("What does psychology study?", "Behavior and mental processes", "Only planets", "Only bones", "Only weather"),
        makeQ("What is an emotion?", "A feeling response to an experience", "A type of muscle", "A planet", "A food group"),
        makeQ("What is a habit?", "A behavior repeated regularly", "A single random sound", "A type of cloud", "A bone"),
        makeQ("What can help when you feel stressed?", "Slow breathing and taking a pause", "Ignoring every problem forever", "Shouting at everyone", "Skipping all rest"),
        makeQ("What is attention?", "Focusing mental resources on something", "The color of a person's eyes", "A type of blood cell", "The length of a bone"),
        makeQ("Do people always interpret events the same way?", "No, interpretations can differ", "Yes, always", "Only adults differ", "Only during sleep"),
        makeQ("What is motivation?", "A reason or drive to act", "A type of organ", "A planet's orbit", "A digestive fluid"),
        makeQ("What is body language?", "Nonverbal signals such as posture and gestures", "Only spoken words", "A written exam", "A type of food"),
        makeQ("What can help make a large task feel manageable?", "Breaking it into smaller steps", "Never starting", "Doing everything at once without a plan", "Avoiding all reminders"),
        makeQ("What is self-awareness?", "Noticing your own thoughts, feelings, and actions", "Knowing every future event", "Reading everyone's mind", "Never having emotions")
      ],
      medium: [
        makeQ("What is confirmation bias?", "Favoring information that supports existing beliefs", "Forgetting how to read", "Learning only through movement", "Changing beliefs every minute"),
        makeQ("What is reinforcement in learning?", "A consequence that makes a behavior more likely", "A punishment that always works", "A type of dream", "A memory that cannot change"),
        makeQ("What is cognitive dissonance?", "Discomfort from conflicting beliefs or actions", "A type of eyesight", "A muscle contraction", "A planet alignment"),
        makeQ("What is the placebo effect?", "A response influenced by expectations or treatment context", "A guaranteed cure for every illness", "A type of bone", "An animal migration"),
        makeQ("What is selective attention?", "Focusing on some information while filtering other input", "Remembering everything perfectly", "Sleeping without dreaming", "Ignoring all sensory information"),
        makeQ("What is intrinsic motivation?", "Doing something because it is personally interesting or satisfying", "Acting only for a prize", "Being forced to act", "Avoiding every challenge"),
        makeQ("What is a cognitive reappraisal?", "Reinterpreting a situation to change its emotional impact", "Repeating a word without meaning", "Stopping all thought", "A type of reflex"),
        makeQ("What is social conformity?", "Adjusting behavior or opinions toward a group", "Living without other people", "A biological cell division", "A kind of weather"),
        makeQ("What is the bystander effect?", "People may be less likely to help when others are present", "People always help faster in crowds", "A type of memory storage", "A reflex in the knee"),
        makeQ("Why can routines support behavior change?", "They make helpful actions easier to repeat", "They remove all need for effort", "They guarantee perfect results", "They prevent learning")
      ],
      hard: [
        makeQ("What is the fundamental attribution error?", "Overemphasizing personality and underestimating situation when judging others", "Believing all memories are exact", "Forgetting your own name", "Changing an object's color"),
        makeQ("What is metacognition?", "Thinking about and monitoring one's own thinking", "A type of muscle", "A stage of sleep only", "The study of rocks"),
        makeQ("What is an implementation intention?", "A plan linking a situation cue to a specific action", "A vague wish without a plan", "A memory of a dream", "A type of hormone"),
        makeQ("What is the availability heuristic?", "Judging likelihood by how easily examples come to mind", "Measuring probability with perfect accuracy", "A way plants absorb light", "A type of reflex"),
        makeQ("What is learned helplessness?", "Reduced attempts to change outcomes after repeated perceived lack of control", "Learning a new language quickly", "A type of muscle growth", "A perfect memory"),
        makeQ("What is a growth mindset?", "The belief that abilities can develop with learning and effort", "Believing improvement is impossible", "Assuming talent never changes", "Avoiding feedback"),
        makeQ("What is cognitive load?", "The amount of mental processing demand on working memory", "The weight of the brain", "The number of bones in a hand", "A measure of heart rate"),
        makeQ("What is an operant conditioning schedule?", "A pattern determining when a behavior is reinforced", "A timetable for planets", "A kind of food chain", "A stage of digestion"),
        makeQ("What is the spotlight effect?", "Overestimating how much others notice our appearance or actions", "A type of light bulb", "A sleep stage", "A memory that everyone shares"),
        makeQ("Why is correlation not enough to prove causation?", "Two variables may be related due to other factors or coincidence", "Correlations never exist", "Causes cannot be studied", "All related events are identical")
      ]
    }
  },
  {    id: "brain", icon: "💡", title: "Brain & Intelligence",
    meaning: "Explore neurons, learning, reasoning, attention, and brain function.",
    facts: ["Neurons communicate through electrical and chemical signals.", "The brain uses a substantial share of the body's energy.", "Practice can change connections in the brain.", "Different brain regions work together on complex tasks."],
    levels: {
      easy: [
        makeQ("Which organ is the main control center of the nervous system?", "Brain", "Stomach", "Kidney", "Lung"),
        makeQ("What is a neuron?", "A nerve cell", "A type of bone", "A blood vessel", "A digestive enzyme"),
        makeQ("Which sense is strongly linked to the occipital lobe?", "Vision", "Smell", "Taste only", "Touch only"),
        makeQ("What protects the brain?", "Skull", "Ribs", "Kneecap", "Pelvis"),
        makeQ("What does memory help you do?", "Retain and use information", "Breathe without lungs", "Pump blood", "Digest rocks"),
        makeQ("What is learning?", "A process of gaining or changing knowledge and skills", "A type of bone", "A planet's movement", "A blood group"),
        makeQ("Which part helps coordinate balance and movement?", "Cerebellum", "Stomach", "Bladder", "Skin"),
        makeQ("What is attention useful for?", "Selecting information to focus on", "Changing your DNA at will", "Making food", "Creating gravity"),
        makeQ("Can practice improve a skill?", "Yes, practice can help improve many skills", "No, skills never change", "Only once in a lifetime", "Only during sleep"),
        makeQ("What connects the brain with much of the body?", "Spinal cord and peripheral nerves", "Hair and nails", "Teeth only", "Cartilage only")
      ],
      medium: [
        makeQ("What is a synapse?", "A junction where neurons communicate", "A bone in the arm", "A lung air sac", "A type of hormone"),
        makeQ("What is working memory?", "Holding and manipulating information briefly", "Remembering every event forever", "Storing oxygen in bones", "A type of digestion"),
        makeQ("Which neurotransmitter is important for voluntary movement and reward pathways?", "Dopamine", "Hemoglobin", "Keratin", "Bile"),
        makeQ("What is neuroplasticity?", "The nervous system's ability to change with experience", "The brain becoming plastic material", "A type of bone fracture", "A permanent stop to learning"),
        makeQ("What does the hippocampus help with?", "Forming many new memories", "Pumping blood", "Filtering urine", "Moving the jaw only"),
        makeQ("What does the amygdala contribute to?", "Processing emotional significance, including fear", "Making red blood cells", "Exchanging oxygen in lungs", "Producing stomach acid"),
        makeQ("What is a reflex?", "A rapid, automatic response to a stimulus", "A planned essay", "A type of memory book", "A planet's orbit"),
        makeQ("What is divided attention?", "Trying to attend to more than one task or input", "Remembering only childhood", "Sleeping deeply", "A type of eyesight"),
        makeQ("What is the prefrontal cortex involved in?", "Planning, decision-making, and control of behavior", "Filtering blood", "Digesting food", "Producing bile"),
        makeQ("Why can multitasking reduce performance?", "Switching tasks can use time and mental resources", "The brain has no ability to focus", "All tasks become easier together", "It permanently removes memory")
      ],
      hard: [
        makeQ("What is long-term potentiation?", "A lasting increase in the strength of certain synaptic connections", "A bone repair process", "A kind of blood clot", "A stage of digestion"),
        makeQ("What is an action potential?", "A rapid electrical change that travels along an excitable cell membrane", "A hormone in the stomach", "A type of bone", "A memory test"),
        makeQ("What is the blood-brain barrier?", "A selective interface that limits passage of many substances from blood into brain tissue", "A skull opening for sound", "A blood vessel inside the heart", "A layer of skin on the brain"),
        makeQ("What is lateralization in brain function?", "Some functions are more strongly associated with one hemisphere", "Each hemisphere works completely alone", "The brain has only one side", "Every skill is controlled by one tiny spot"),
        makeQ("What is a neurotransmitter?", "A chemical messenger used in neural communication", "A type of bone cell", "A lung air sac", "A digestive muscle"),
        makeQ("What is executive function?", "Mental processes used for planning, inhibition, and flexible control", "Only the ability to see color", "A kind of digestion", "The force of gravity"),
        makeQ("What does myelination generally do?", "Improves the speed and reliability of many neural signals", "Stops all neural signals", "Makes neurons into bones", "Removes synapses"),
        makeQ("What is sensory adaptation?", "Reduced sensitivity to a constant stimulus over time", "A permanent loss of all senses", "A type of long-term planning", "An increase in every signal forever"),
        makeQ("What is the default mode network associated with?", "Patterns of activity during internally directed thought and rest", "Only controlling heartbeat", "Digesting proteins", "Moving the fingers directly"),
        makeQ("Why can brain scans alone not reveal every thought?", "Brain activity needs careful interpretation and is not a direct readout of thought", "Brains have no electrical activity", "Scans show only bones", "Thoughts never involve the brain")
      ]
    }
  },
  {
    id: "mysteries", icon: "🔬", title: "Science Mysteries",
    meaning: "Investigate scientific puzzles, experiments, physics, chemistry, and evidence.",
    facts: ["Scientific explanations are tested against evidence.", "A good experiment controls relevant variables.", "Atoms are made of smaller subatomic particles.", "Some scientific questions remain open because evidence is incomplete."],
    levels: {
      easy: [
        makeQ("What is a hypothesis?", "A testable proposed explanation", "A fact that can never change", "A type of animal", "A planet"),
        makeQ("What is matter made of?", "Atoms and molecules", "Only sound", "Only shadows", "Only light"),
        makeQ("What force pulls objects toward Earth?", "Gravity", "Echo", "Taste", "Color"),
        makeQ("What is an experiment used for?", "Testing an idea or hypothesis", "Making evidence unnecessary", "Guaranteeing a desired result", "Changing the past"),
        makeQ("What is water's chemical formula?", "H₂O", "CO₂", "O₂", "NaCl"),
        makeQ("What instrument measures temperature?", "Thermometer", "Ruler", "Compass", "Telescope only"),
        makeQ("What is a magnet known for attracting strongly?", "Certain materials such as iron", "All wood", "All paper", "All liquids"),
        makeQ("What is evaporation?", "Liquid changing into gas", "Gas changing into solid only", "A rock melting into water", "Light becoming sound"),
        makeQ("What is a variable in an experiment?", "A factor that can change", "A guaranteed conclusion", "A fixed law of nature", "A type of microscope"),
        makeQ("Why should scientific claims use evidence?", "Evidence helps evaluate whether claims are supported", "Evidence makes questions unnecessary", "Claims become true when repeated", "Opinions replace observations")
      ],
      medium: [
        makeQ("What is a control group used for?", "Providing a comparison for evaluating an experiment", "Guaranteeing the hypothesis is correct", "Changing every variable at once", "Replacing all measurements"),
        makeQ("What is a molecule?", "Two or more atoms chemically bonded", "A single planet", "A type of sound", "A unit of temperature"),
        makeQ("What is pH used to describe?", "How acidic or basic a solution is", "The age of a star", "The speed of light", "The weight of an atom"),
        makeQ("What is an isotope?", "Atoms of the same element with different neutron numbers", "Atoms of different elements with identical names", "A type of molecule made only of water", "A type of telescope"),
        makeQ("What is the conservation of energy?", "Energy is transferred or transformed rather than created or destroyed in a closed system", "Energy always disappears", "Energy can only be created by humans", "Energy has no measurable forms"),
        makeQ("What is a catalyst?", "A substance that speeds a reaction without being consumed overall", "A substance that always stops reactions", "A type of planet", "A tool for measuring length"),
        makeQ("What is density?", "Mass per unit volume", "Volume per unit temperature", "Distance per unit time", "Force per unit charge"),
        makeQ("Why repeat measurements?", "To assess consistency and reduce the influence of random error", "To guarantee the preferred result", "To remove the need for data", "To make every result identical"),
        makeQ("What is refraction?", "A change in wave direction as it enters a different medium", "A sound disappearing forever", "A chemical reaction producing metal", "An object gaining mass"),
        makeQ("What is a theory in science?", "A well-supported explanatory framework", "A random guess with no evidence", "A fact that cannot be tested", "A personal preference")
      ],
      hard: [
        makeQ("What is falsifiability?", "A claim can in principle be tested in a way that could show it false", "A claim must be popular", "A claim cannot be measured", "A claim must be complicated"),
        makeQ("What does quantum superposition describe?", "A quantum system represented as a combination of possible states", "A planet orbiting two suns only", "A chemical solution boiling", "A sound wave in a vacuum"),
        makeQ("What is entropy in thermodynamics often associated with?", "The number of microscopic arrangements compatible with a macroscopic state", "The color of an object", "The mass of one electron only", "The speed of a planet's orbit"),
        makeQ("What is a confounding variable?", "A factor related to both the proposed cause and outcome that can distort interpretation", "A result that supports every theory", "A variable that never changes", "A unit of measurement"),
        makeQ("What is statistical significance generally about?", "How incompatible data are with a specified null model under assumptions", "Proof that an effect is important in real life", "A guarantee that results are correct", "The size of a sample only"),
        makeQ("What is the uncertainty principle in quantum physics about?", "Limits on jointly specifying certain pairs of physical properties", "A rule that science cannot measure anything", "A claim that planets do not move", "A type of chemical bond"),
        makeQ("What is an exothermic reaction?", "A reaction that releases energy to its surroundings", "A reaction that absorbs energy only", "A reaction that cannot occur", "A reaction with no energy change ever"),
        makeQ("What does a scientific model do?", "Represents aspects of a system to explain or predict behavior", "Copies reality perfectly in every detail", "Replaces all observations", "Guarantees every prediction"),
        makeQ("What is peer review?", "Evaluation of scholarly work by other experts before publication", "A vote that makes a claim true", "A test done only by students", "A method for avoiding criticism"),
        makeQ("Why does a correlation sometimes appear without direct causation?", "A third factor or chance may influence the observed relationship", "Correlation is impossible to calculate", "Every correlation proves a direct cause", "Causation never exists")
      ]
    }
  },
  {
    id: "senses", icon: "👁️", title: "The Five Senses",
    meaning: "Learn how sensory organs detect information and the brain interprets it.",
    facts: ["The retina contains light-sensitive cells.", "The inner ear helps with hearing and balance.", "Taste and smell work together to shape flavor.", "Touch receptors detect several kinds of physical stimuli."],
    levels: {
      easy: [
        makeQ("Which sense uses the eyes?", "Sight", "Hearing", "Taste", "Smell"),
        makeQ("Which organs detect sound?", "Ears", "Elbows", "Lungs", "Kidneys"),
        makeQ("Which sense detects odors?", "Smell", "Sight", "Touch", "Balance only"),
        makeQ("Which body part contains many taste buds?", "Tongue", "Knee", "Shoulder", "Heel"),
        makeQ("Which sense helps detect texture?", "Touch", "Sight only", "Hearing only", "Smell only"),
        makeQ("What does the nose help detect?", "Odor molecules", "Light waves", "Sound vibrations only", "Blood pressure"),
        makeQ("What part of the eye detects light?", "Retina", "Eardrum", "Tongue", "Nail"),
        makeQ("What helps you maintain balance?", "Inner ear", "Teeth", "Hair tips", "Stomach acid"),
        makeQ("What protects the eyes from dust in part?", "Eyelashes", "Toenails", "Ribs", "Tendons"),
        makeQ("Can your senses work together?", "Yes, they combine information", "No, each works completely alone", "Only while sleeping", "Only when it is dark")
      ],
      medium: [
        makeQ("What are rods in the retina especially useful for?", "Vision in dim light", "Detecting sound", "Smelling odors", "Sensing taste"),
        makeQ("What do cones in the retina help detect?", "Color and fine detail in brighter light", "Blood sugar", "Sound pitch in the ear", "Skin pressure only"),
        makeQ("What vibrates when sound waves reach the eardrum?", "The eardrum itself", "The retina", "The tongue", "The kidney"),
        makeQ("What is the olfactory system responsible for?", "Smell", "Vision", "Balance only", "Touch only"),
        makeQ("Why does food seem less flavorful when your nose is blocked?", "Smell contributes strongly to flavor perception", "Taste buds stop existing", "The tongue stops moving", "Food loses all molecules"),
        makeQ("What do skin mechanoreceptors respond to?", "Mechanical pressure, stretch, or vibration", "Only visible light", "Only odors", "Only blood oxygen"),
        makeQ("What is the cochlea?", "A spiral-shaped inner-ear structure important for hearing", "A part of the retina", "A taste bud", "A nose bone"),
        makeQ("What is sensory adaptation?", "Reduced response to a constant stimulus over time", "The permanent loss of all senses", "A type of memory test", "A muscle reflex only"),
        makeQ("What is proprioception?", "Sensing body position and movement", "Sensing only color", "Detecting sound waves", "Identifying smells"),
        makeQ("What is a sensory receptor?", "A cell or structure that detects a stimulus", "A bone that pumps blood", "A type of planet", "A digestive waste product")
      ],
      hard: [
        makeQ("What is the blind spot in the eye?", "The optic disc where the optic nerve exits and photoreceptors are absent", "The center of the lens", "A place where the pupil permanently closes", "A region that detects only blue light"),
        makeQ("What is frequency of a sound wave most closely related to?", "Perceived pitch", "The color of the sound", "The taste of the sound", "The weight of the ear"),
        makeQ("What is the vestibular system important for?", "Balance and sensing head movement", "Smelling food", "Detecting skin temperature only", "Producing saliva"),
        makeQ("What is nociception?", "Neural processing of potentially harmful stimuli", "Detecting only sweet tastes", "Seeing in dim light", "Remembering music"),
        makeQ("What is referred pain?", "Pain perceived at a location different from its source", "A pain that is always imaginary", "A normal color illusion", "A type of hearing"),
        makeQ("What is binocular depth perception supported by?", "Comparing slightly different views from two eyes", "Using only the nose", "Hearing a sound twice", "Touching an object with one finger"),
        makeQ("What is the function of hair cells in the cochlea?", "Convert mechanical vibrations into electrical signals", "Produce tears", "Detect light on the retina", "Make taste receptors"),
        makeQ("What is a sensory threshold?", "The level at which a stimulus can be detected under defined conditions", "The maximum size of an organ", "A type of memory", "The color of a nerve"),
        makeQ("What is synesthesia?", "A condition where stimulation in one sense can be associated with another sensory experience", "A complete absence of all senses", "A type of muscle", "A disease of the bones only"),
        makeQ("Why can optical illusions occur?", "The brain interprets visual information using context and assumptions", "Eyes never send information to the brain", "Light has no physical properties", "All people see every image identically")
      ]
    }
  },
  {
    id: "memory", icon: "📚", title: "Memory & Learning",
    meaning: "Understand how information is encoded, stored, recalled, and practiced.",
    facts: ["Retrieval practice can strengthen learning.", "Spacing study sessions is often more effective than cramming.", "Sleep supports some forms of memory consolidation.", "Forgetting can happen for several different reasons."],
    levels: {
      easy: [
        makeQ("What is memory?", "The ability to retain and recall information", "A type of bone", "A planet", "A digestive enzyme"),
        makeQ("Which study habit can help learning?", "Reviewing material over several days", "Only reading once while distracted", "Never practicing", "Studying only after the exam"),
        makeQ("What is recall?", "Retrieving information from memory", "Eating a meal", "Moving a muscle", "Hearing every sound"),
        makeQ("What is a mnemonic?", "A memory aid or strategy", "A type of planet", "A blood cell", "A bone joint"),
        makeQ("Can practice improve memory for a skill?", "Yes, practice can help", "No, memory never changes", "Only during childhood", "Only when standing"),
        makeQ("What does paying attention help with?", "Encoding information for later use", "Making time stop", "Removing all forgetting", "Changing the weather"),
        makeQ("What is forgetting?", "Being unable to retrieve information at a given time", "Proof that information never existed", "A type of hearing", "A planet's movement"),
        makeQ("What is a flashcard used for?", "Practicing questions and answers", "Measuring temperature", "Filtering water", "Seeing distant stars"),
        makeQ("What can help you remember a list?", "Grouping related items", "Adding unrelated distractions", "Never reviewing it", "Reading it backward only"),
        makeQ("What is learning?", "A change in knowledge or skill through experience", "A type of organ", "A cloud pattern", "A blood group")
      ],
      medium: [
        makeQ("What is retrieval practice?", "Actively trying to recall learned information", "Only highlighting a textbook", "Avoiding questions", "Copying notes without thinking"),
        makeQ("What is spaced practice?", "Studying across multiple sessions separated in time", "Studying everything in one long rush", "Never revisiting a topic", "Reading while asleep only"),
        makeQ("What is working memory?", "A limited system for holding and using information briefly", "A perfect permanent archive", "A type of muscle", "A blood vessel"),
        makeQ("What is interference in memory?", "Other information competes with remembering something", "Memory always improves with noise", "A type of bone growth", "A form of digestion"),
        makeQ("What is encoding?", "Transforming information into a form memory can use", "Deleting every memory", "Moving blood through arteries", "Changing a planet's orbit"),
        makeQ("What is recognition?", "Identifying information as familiar when encountered", "Creating a new sense organ", "Forgetting every name", "Learning without any input"),
        makeQ("Why can explaining a concept in your own words help?", "It encourages processing and reveals gaps in understanding", "It guarantees perfect grades", "It prevents all mistakes", "It replaces every kind of practice"),
        makeQ("What is chunking?", "Grouping information into meaningful units", "Breaking a pencil", "Studying only one letter forever", "Avoiding categories"),
        makeQ("What can sleep contribute to after learning?", "Consolidation of some memories", "Guaranteed perfect recall of everything", "Erasing every new skill", "Replacing the need to practice"),
        makeQ("Why can context help recall?", "Cues associated with learning may help access stored information", "Context always changes facts", "Memory never uses cues", "Context makes every answer correct")
      ],
      hard: [
        makeQ("What is the testing effect?", "Retrieving information can improve later retention", "Tests always reduce learning", "Only rereading improves memory", "Memory is unaffected by practice"),
        makeQ("What is proactive interference?", "Older learning makes it harder to remember newer information", "New learning disrupts old information", "Sleep removes all memories", "A reflex prevents learning"),
        makeQ("What is retroactive interference?", "Newer learning makes it harder to recall older information", "Older learning blocks every new skill", "All memories become stronger", "A type of sensory adaptation"),
        makeQ("What is semantic memory?", "Memory for facts, concepts, and meanings", "Memory for personal life episodes only", "Memory for motor skills only", "Memory for smells only"),
        makeQ("What is episodic memory?", "Memory for personally experienced events", "Memory for word meanings only", "A reflex response", "A type of hormone"),
        makeQ("What is procedural memory?", "Memory for skills and how to perform actions", "Memory for dates only", "A type of visual illusion", "Memory for blood pressure"),
        makeQ("What is reconsolidation in memory research?", "A retrieved memory may become changeable before being stored again", "Every memory is permanently fixed", "Memory can only form during sleep", "A process that removes all memories"),
        makeQ("What is the misinformation effect?", "Post-event information can alter later reports of an event", "Information never affects memory", "A type of eye movement", "A form of digestion"),
        makeQ("Why is confidence not a perfect measure of memory accuracy?", "People can feel confident and still remember incorrectly", "Confidence always means a memory is correct", "Memory accuracy can never be studied", "Confidence erases memory"),
        makeQ("What is metacognitive monitoring during study?", "Judging how well you understand or remember material", "Copying words without evaluating them", "Avoiding feedback", "Memorizing without attention")
      ]
    }
  }
];
// Validate the quiz data and keep the site working if data is edited later.
for (const category of categories) {
  for (const level of ["easy", "medium", "hard"]) {
    if (!category.levels[level] || category.levels[level].length !== 10) {
      console.error(`Category ${category.title} must have 10 ${level} questions.`);
    }
  }
}

let currentCategory = null;
let currentLevel = "easy";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let lastScore = 0;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showOnly(sectionId) {
  const sections = ["topics-section", "content-page", "quiz", "results"];
  sections.forEach(id => {
    const element = document.getElementById(id);
    if (element) element.hidden = id !== sectionId;
  });
  const encouragement = document.querySelector(".encouragement");
  if (encouragement) encouragement.hidden = sectionId !== "topics-section";
}

function renderTopics() {
  const container = document.getElementById("topics");
  if (!container) return;
  container.innerHTML = "";

  categories.forEach(category => {
    const card = document.createElement("article");
    card.className = "topic-card";

    const heading = document.createElement("h3");
    heading.textContent = `${category.icon} ${category.title}`;

    const paragraph = document.createElement("p");
    paragraph.textContent = category.meaning;

    const button = document.createElement("button");
    button.textContent = "Choose Difficulty";
    button.addEventListener("click", () => chooseDifficulty(category.id));

    card.append(heading, paragraph, button);
    container.appendChild(card);
  });
}

function chooseDifficulty(categoryId) {
  currentCategory = categories.find(category => category.id === categoryId);
  if (!currentCategory) return;

  const panel = document.getElementById("content-page");
  const title = document.getElementById("content-title");
  const body = document.getElementById("content-body");
  if (!panel || !title || !body) return;

  title.textContent = `${currentCategory.icon} ${currentCategory.title} — Choose a Level`;
  body.innerHTML = "";

  const intro = document.createElement("p");
  intro.textContent = "Pick your challenge. Each quiz has 10 questions.";
  body.appendChild(intro);

  [
    ["easy", "🟢 Easy", "Start with the basics"],
    ["medium", "🟡 Medium", "Test your understanding"],
    ["hard", "🔴 Hard", "Challenge yourself"]
  ].forEach(([level, label, description]) => {
    const card = document.createElement("div");
    card.className = "content-item";
    const heading = document.createElement("h3");
    heading.textContent = label;
    const p = document.createElement("p");
    p.textContent = description;
    const button = document.createElement("button");
    button.textContent = `Start ${label.replace(/^.{2}\s/, "")} Quiz`;
    button.addEventListener("click", () => startQuiz(categoryId, level));
    card.append(heading, p, button);
    body.appendChild(card);
  });

  showOnly("content-page");
}

function startQuiz(categoryId, level) {
  currentCategory = categories.find(category => category.id === categoryId);
  if (!currentCategory || !currentCategory.levels[level]) return;

  currentLevel = level;
  currentQuestions = shuffle(currentCategory.levels[level]).map(question => ({
    ...question,
    options: shuffle(question.options)
  }));
  currentIndex = 0;
  score = 0;
  answered = false;
  showOnly("quiz");
  showQuestion();
}

function showQuestion() {
  const question = currentQuestions[currentIndex];
  if (!question) return;

  answered = false;
  document.getElementById("quiz-category").textContent =
    `${currentCategory.icon} ${currentCategory.title} · ${currentLevel.toUpperCase()}`;
  document.getElementById("quiz-progress").textContent =
    `Question ${currentIndex + 1} of ${currentQuestions.length}`;
  document.getElementById("progress-bar").style.width =
    `${(currentIndex / currentQuestions.length) * 100}%`;
  document.getElementById("question-text").textContent = question.q;
  document.getElementById("feedback").textContent = "";

  const optionsContainer = document.getElementById("answer-options");
  optionsContainer.innerHTML = "";

  question.options.forEach(option => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => chooseAnswer(button, option, question));
    optionsContainer.appendChild(button);
  });

  const nextButton = document.getElementById("next-button");
  nextButton.disabled = true;
  nextButton.textContent = currentIndex === currentQuestions.length - 1
    ? "See Results 🎉"
    : "Next Question →";
}

function chooseAnswer(button, selected, question) {
  if (answered) return;
  answered = true;

  const correct = selected === question.answer;
  if (correct) score++;

  document.querySelectorAll("#answer-options button").forEach(optionButton => {
    optionButton.disabled = true;
    if (optionButton.textContent === question.answer) {
      optionButton.classList.add("correct");
    }
  });

  if (!correct) button.classList.add("incorrect");

  const feedback = document.getElementById("feedback");
  feedback.textContent = correct
    ? "✅ Correct! Great job!"
    : `❌ Not quite! The correct answer is: ${question.answer}`;

  document.getElementById("progress-bar").style.width =
    `${((currentIndex + 1) / currentQuestions.length) * 100}%`;
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  if (!answered) return;
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  lastScore = score;
  showOnly("results");

  const percentage = Math.round((score / currentQuestions.length) * 100);
  let message;
  if (percentage === 100) message = "PERFECT SCORE! You're a science superstar! 🌟";
  else if (percentage >= 80) message = "Amazing work! You really know your stuff! 🎉";
  else if (percentage >= 60) message = "Great effort! You're learning more every time! 💜";
  else if (percentage >= 40) message = "Nice try! Review the topic and give it another go! 📚";
  else message = "Every expert starts somewhere. Try again and keep learning! 🌱";

  document.getElementById("result-message").textContent = message;
  document.getElementById("result-score").textContent =
    `${score} / ${currentQuestions.length} correct (${percentage}%)`;
}

function restartQuiz() {
  if (currentCategory) startQuiz(currentCategory.id, currentLevel);
}

function backToTopics() {
  currentCategory = null;
  showOnly("topics-section");
  renderTopics();
}

function openContentPage(page) {
  const title = document.getElementById("content-title");
  const body = document.getElementById("content-body");
  if (!title || !body) return;

  body.innerHTML = "";

  if (page === "meanings") {
    title.textContent = "📖 Topic Meanings";
    categories.forEach(category => {
      const item = document.createElement("article");
      item.className = "content-item";
      const heading = document.createElement("h3");
      heading.textContent = `${category.icon} ${category.title}`;
      const paragraph = document.createElement("p");
      paragraph.textContent = category.meaning;
      item.append(heading, paragraph);
      body.appendChild(item);
    });
  } else if (page === "facts") {
    title.textContent = "🤯 Fun Facts";
    categories.forEach(category => {
      const item = document.createElement("article");
      item.className = "content-item";
      const heading = document.createElement("h3");
      heading.textContent = `${category.icon} ${category.title}`;
      const list = document.createElement("ul");
      category.facts.forEach(fact => {
        const li = document.createElement("li");
        li.textContent = fact;
        list.appendChild(li);
      });
      item.append(heading, list);
      body.appendChild(item);
    });
  } else if (page === "questions") {
    title.textContent = "❓ All 300 Quiz Questions";
    const intro = document.createElement("p");
    intro.textContent = "Choose a topic and level to play its 10-question quiz.";
    body.appendChild(intro);

    categories.forEach(category => {
      const item = document.createElement("article");
      item.className = "content-item";
      const heading = document.createElement("h3");
      heading.textContent = `${category.icon} ${category.title}`;
      item.appendChild(heading);

      ["easy", "medium", "hard"].forEach(level => {
        const subheading = document.createElement("h4");
        subheading.textContent = `${level[0].toUpperCase()}${level.slice(1)} — 10 questions`;
        const list = document.createElement("ol");
        category.levels[level].forEach(question => {
          const li = document.createElement("li");
          li.textContent = question.q;
          list.appendChild(li);
        });
        item.append(subheading, list);

        const button = document.createElement("button");
        button.textContent = `Play ${category.title} — ${level}`;
        button.addEventListener("click", () => startQuiz(category.id, level));
        item.appendChild(button);
      });

      body.appendChild(item);
    });
  }

  showOnly("content-page");
}

function closeContentPage() {
  showOnly("topics-section");
  renderTopics();
}

// Start the website.
document.addEventListener("DOMContentLoaded", () => {
  renderTopics();

  // Update the old navigation label if the existing HTML still says "100".
  const questionNavButton = [...document.querySelectorAll(".welcome-tags button")]
    .find(button => button.textContent.includes("Quiz Questions"));
  if (questionNavButton) questionNavButton.textContent = "❓ 300 Quiz Questions";
});