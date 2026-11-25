const topics = [
  {
    id: "number-operations", term: 1, title: "Number & Numeration", symbol: "123", tone: "green",
    description: "Place value, number bases, rounding, significant figures and standard form.",
    intro: "Numbers become easier to manage when you understand their place value. In JSS3, you will practise number bases, estimating answers, rounding to a stated accuracy and writing very large or very small numbers in standard form.",
    lesson: "To round to significant figures, count from the first non-zero digit; if the next digit is 5 or more, round up. Standard form is a × 10ⁿ, where 1 ≤ a < 10. In base two, each place is a power of 2.",
    idea: "In 0.004786, the first two significant figures are 4 and 7. To 2 significant figures it is 0.0048.",
    questions: [
      { prompt: "Write 6,350,000 in standard form.", answer: "<strong>6.35 × 10⁶.</strong> Move the decimal point 6 places to the left so the first factor is between 1 and 10." },
      { prompt: "Round 0.07846 to 3 significant figures.", answer: "<strong>0.0785.</strong> The first three significant figures are 7, 8 and 4. The next digit is 6, so round the 4 up to 5." },
      { prompt: "Estimate 49.8 × 19.7 by rounding each number to 1 significant figure.", answer: "<strong>50 × 20 = 1,000.</strong> Rounding first gives a quick estimate to check a calculator answer." },
      { prompt: "Convert 101101₂ to base ten.", answer: "<strong>45.</strong> Expand by powers of 2: 1×32 + 0×16 + 1×8 + 1×4 + 0×2 + 1×1 = 45." },
      { prompt: "Write 25 in base two.", answer: "<strong>11001₂.</strong> 25 = 16 + 8 + 1 = 2⁴ + 2³ + 2⁰, so write 1 in those places and 0 in the others." }
    ]
  },
  {
    id: "fractions-ratio", term: 1, title: "Fractions, Ratio & Proportion", symbol: "⅔", tone: "violet",
    description: "Work confidently with fractions, rates, ratios and percentages.",
    intro: "Fractions, ratios, rates and percentages all describe parts or comparisons. Simplify ratios by dividing every part by the same common factor, and use equivalent fractions to compare different quantities.",
    lesson: "For direct proportion, both quantities change in the same direction. To share an amount in a ratio, add the ratio parts, divide the total by that sum, then multiply by each part.",
    idea: "A ratio of 2 : 3 has 5 parts altogether. If the total is 40, each part is 40 ÷ 5 = 8.",
    questions: [
      { prompt: "Share ₦840 in the ratio 3 : 4.", answer: "<strong>₦360 and ₦480.</strong> There are 7 parts; ₦840 ÷ 7 = ₦120 per part. So 3 × ₦120 = ₦360 and 4 × ₦120 = ₦480." },
      { prompt: "A car travels 150 km in 3 hours. What is its average speed?", answer: "<strong>50 km/h.</strong> Speed = distance ÷ time = 150 ÷ 3." },
      { prompt: "Find 15% of ₦2,400.", answer: "<strong>₦360.</strong> 15% = 15/100, so 0.15 × ₦2,400 = ₦360." }
    ]
  },
  {
    id: "financial-maths", term: 1, title: "Financial Arithmetic", symbol: "₦", tone: "peach",
    description: "Calculate profit, loss, discount, tax and simple interest.",
    intro: "Financial mathematics helps with everyday decisions such as comparing prices, finding discounts and calculating interest. Keep track of whether a percentage is added to or taken away from the original amount.",
    lesson: "Profit = selling price − cost price. Loss = cost price − selling price. Simple interest I = PRT/100, where P is principal, R is the annual rate (%) and T is time in years.",
    idea: "A 10% discount on ₦5,000 is ₦500, so the sale price is ₦4,500.",
    questions: [
      { prompt: "A trader buys a bag for ₦4,000 and sells it for ₦5,000. Find the profit percentage.", answer: "<strong>25%.</strong> Profit = ₦5,000 − ₦4,000 = ₦1,000. Profit percentage = (₦1,000 ÷ ₦4,000) × 100 = 25%." },
      { prompt: "Find the simple interest on ₦12,000 at 5% per year for 2 years.", answer: "<strong>₦1,200.</strong> I = PRT/100 = (12,000 × 5 × 2) ÷ 100 = ₦1,200." },
      { prompt: "A shirt marked ₦8,000 is sold at a 15% discount. What is the sale price?", answer: "<strong>₦6,800.</strong> Discount = 15% of ₦8,000 = ₦1,200. Sale price = ₦8,000 − ₦1,200." }
    ]
  },
  {
    id: "algebra", term: 1, title: "Algebra & Factorisation", symbol: "x²", tone: "blue",
    description: "Simplify expressions, expand brackets and factorise.",
    intro: "Algebra uses letters to represent numbers. Like terms have the same letter part and powers, so they can be collected. Expanding removes brackets; factorising reverses that process.",
    lesson: "Multiply every term inside a bracket when expanding. To factorise a common factor, find the largest factor shared by all terms and place it outside the bracket.",
    idea: "3x + 2x = 5x, but 3x + 2y cannot be simplified further because x and y are different terms.",
    questions: [
      { prompt: "Simplify 5a + 3b − 2a + b.", answer: "<strong>3a + 4b.</strong> Combine like terms: 5a − 2a = 3a and 3b + b = 4b." },
      { prompt: "Expand 4(2x − 3).", answer: "<strong>8x − 12.</strong> Multiply both terms in the bracket by 4." },
      { prompt: "Factorise 12y + 18.", answer: "<strong>6(2y + 3).</strong> The highest common factor of 12y and 18 is 6." }
    ]
  },
  {
    id: "equations", term: 1, title: "Equations & Inequalities", symbol: "=", tone: "rose",
    description: "Solve linear equations, inequalities and paired equations.",
    intro: "An equation is a balance: whatever operation you use on one side, use on the other. An inequality compares values using <, >, ≤ or ≥.",
    lesson: "Undo operations in reverse order to isolate the unknown. When multiplying or dividing an inequality by a negative number, reverse its inequality sign.",
    idea: "If x/3 = 5, multiply both sides by 3 to get x = 15.",
    questions: [
      { prompt: "Solve 3x + 7 = 25.", answer: "<strong>x = 6.</strong> Subtract 7 from both sides: 3x = 18. Divide by 3." },
      { prompt: "Solve 5 − 2x > 11.", answer: "<strong>x < −3.</strong> Subtract 5: −2x > 6. Divide by −2 and reverse the sign." },
      { prompt: "Solve x + y = 10 and x − y = 2.", answer: "<strong>x = 6, y = 4.</strong> Add the equations to get 2x = 12, so x = 6. Substitute into x + y = 10." }
    ]
  },
  {
    id: "angles-polygons", term: 1, title: "Angles & Polygons", symbol: "∠", tone: "violet",
    description: "Use angle facts, parallel lines and polygon properties.",
    intro: "Angle rules let you find missing angles without measuring. A polygon is a closed shape made from straight sides. The sum of interior angles depends on the number of sides.",
    lesson: "Angles on a straight line total 180°; around a point total 360°; vertically opposite angles are equal. Interior angle sum of an n-sided polygon = (n − 2) × 180°.",
    idea: "A quadrilateral has interior angle sum (4 − 2) × 180° = 360°.",
    questions: [
      { prompt: "Two angles on a straight line are x° and 65°. Find x.", answer: "<strong>x = 115°.</strong> Angles on a straight line add to 180°, so x = 180° − 65°." },
      { prompt: "Find the interior angle sum of a hexagon.", answer: "<strong>720°.</strong> (6 − 2) × 180° = 4 × 180° = 720°." },
      { prompt: "A triangle has angles 48° and 67°. Find its third angle.", answer: "<strong>65°.</strong> Angles in a triangle total 180°, so 180° − 48° − 67° = 65°." }
    ]
  },
  {
    id: "sets", term: 2, title: "Sets & Venn Diagrams", symbol: "∩", tone: "green",
    description: "Describe sets and solve problems with Venn diagrams.",
    intro: "A set is a collection of distinct objects. Venn diagrams use circles to show how sets overlap. The intersection contains items shared by sets; the union contains items in either set or both.",
    lesson: "For two sets, n(A ∪ B) = n(A) + n(B) − n(A ∩ B). Subtract the intersection once because it was counted in both sets.",
    idea: "If 8 students like football, 6 like tennis and 3 like both, then 8 + 6 − 3 = 11 like at least one.",
    questions: [
      { prompt: "In a class of 30, 18 like rice, 12 like beans and 5 like both. How many like at least one?", answer: "<strong>25 students.</strong> n(R ∪ B) = 18 + 12 − 5 = 25." },
      { prompt: "Using the class above, how many like neither rice nor beans?", answer: "<strong>5 students.</strong> 30 − 25 = 5." },
      { prompt: "If A = {2, 4, 6, 8} and B = {1, 2, 3, 4}, find A ∩ B.", answer: "<strong>{2, 4}.</strong> The intersection lists elements common to both sets." }
    ]
  },
  {
    id: "graphs", term: 2, title: "Graphs & Coordinates", symbol: "x/y", tone: "blue",
    description: "Plot points, make value tables and draw linear graphs.",
    intro: "A coordinate is written (x, y): move along the horizontal x-axis first, then up or down the vertical y-axis. A table of values helps you plot a graph accurately.",
    lesson: "For y = mx + c, m is the gradient and c is the y-intercept. Choose several x-values, calculate y, plot the coordinate pairs and join them with a straight line.",
    idea: "For y = 2x + 1, when x = 2, y = 2(2) + 1 = 5. The point (2, 5) lies on the graph.",
    questions: [
      { prompt: "For y = 2x + 1, find y when x = 3.", answer: "<strong>y = 7.</strong> Substitute x = 3: y = 2(3) + 1 = 7." },
      { prompt: "Which quadrant contains the point (−4, 3)?", answer: "<strong>Quadrant II.</strong> Its x-coordinate is negative and y-coordinate is positive." },
      { prompt: "Find the gradient of the line through (1, 2) and (3, 8).", answer: "<strong>3.</strong> Gradient = change in y ÷ change in x = (8 − 2) ÷ (3 − 1) = 6 ÷ 2 = 3." }
    ]
  },
  {
    id: "mensuration", term: 2, title: "Mensuration: Plane Shapes", symbol: "▱", tone: "peach",
    description: "Find perimeter and area of common two-dimensional shapes.",
    intro: "Perimeter is the total distance around a shape. Area measures the surface inside it, so area is written in square units such as cm² or m².",
    lesson: "Rectangle area = length × width. Triangle area = ½ × base × perpendicular height. Parallelogram area = base × perpendicular height. Trapezium area = ½ × (sum of parallel sides) × height.",
    idea: "A triangle with base 10 cm and perpendicular height 6 cm has area ½ × 10 × 6 = 30 cm².",
    questions: [
      { prompt: "Find the area of a rectangle 12 cm long and 5 cm wide.", answer: "<strong>60 cm².</strong> Area = length × width = 12 × 5." },
      { prompt: "A triangle has base 14 m and perpendicular height 9 m. Find its area.", answer: "<strong>63 m².</strong> Area = ½ × 14 × 9 = 63." },
      { prompt: "Find the area of a trapezium with parallel sides 8 cm and 14 cm and height 5 cm.", answer: "<strong>55 cm².</strong> Area = ½ × (8 + 14) × 5 = ½ × 22 × 5." }
    ]
  },
  {
    id: "circles-bearings", term: 2, title: "Circles & Bearings", symbol: "◉", tone: "violet",
    description: "Use circle measurements and read three-figure bearings.",
    intro: "Circle problems use radius (centre to edge), diameter (across through the centre) and circumference (distance around). A bearing gives a direction measured clockwise from north.",
    lesson: "Diameter d = 2r. Circumference C = 2πr or πd; area A = πr². Bearings are written with three digits, for example east is 090° and south is 180°.",
    idea: "A bearing is always measured clockwise from north at the starting point.",
    questions: [
      { prompt: "Find the circumference of a circle with radius 7 cm. Use π = 22/7.", answer: "<strong>44 cm.</strong> C = 2πr = 2 × 22/7 × 7 = 44 cm." },
      { prompt: "Find the area of a circle with diameter 10 cm. Use π = 3.14.", answer: "<strong>78.5 cm².</strong> Radius = 10 ÷ 2 = 5 cm. Area = πr² = 3.14 × 25." },
      { prompt: "What is the bearing of a point due west?", answer: "<strong>270°.</strong> Bearings are measured clockwise from north; west is three-quarters of a full turn." }
    ]
  },
  {
    id: "construction-loci", term: 2, title: "Construction & Loci", symbol: "△", tone: "rose",
    description: "Use ruler and compass to bisect lines and angles and describe loci.",
    intro: "Geometric constructions use a ruler and compass to make accurate lines and angles. A locus is the path of all points that satisfy a given condition.",
    lesson: "The perpendicular bisector of a line segment meets it at 90° and halfway along. An angle bisector divides an angle into two equal angles. Points at a fixed distance from one point form a circle.",
    idea: "Every point on the perpendicular bisector of AB is the same distance from A and B.",
    questions: [
      { prompt: "A segment AB is 8 cm long. How far from A is the point where its perpendicular bisector crosses AB?", answer: "<strong>4 cm.</strong> The perpendicular bisector crosses at the midpoint, so 8 ÷ 2 = 4 cm." },
      { prompt: "An angle of 74° is bisected. What is the size of each smaller angle?", answer: "<strong>37°.</strong> An angle bisector divides the angle into two equal parts: 74° ÷ 2 = 37°." },
      { prompt: "Describe the locus of points that are exactly 3 cm from point P.", answer: "<strong>A circle with centre P and radius 3 cm.</strong> Every point on its circumference is 3 cm from P." }
    ]
  },
  {
    id: "statistics", term: 2, title: "Statistics & Data", symbol: "▥", tone: "blue",
    description: "Organise information and calculate averages and range.",
    intro: "Statistics helps us collect, organise and interpret information. Mean, median and mode describe a typical value in different ways; range describes the spread.",
    lesson: "Mean = total of values ÷ number of values. Median is the middle value after sorting. Mode is the most frequent value. Range = largest − smallest.",
    idea: "Always sort data before finding its median. With an even number of values, average the two middle values.",
    questions: [
      { prompt: "Find the mean of 4, 7, 5, 8 and 6.", answer: "<strong>6.</strong> Sum = 30; there are 5 values, so mean = 30 ÷ 5 = 6." },
      { prompt: "Find the median of 3, 9, 4, 7, 2.", answer: "<strong>4.</strong> In order: 2, 3, 4, 7, 9. The middle value is 4." },
      { prompt: "Find the mode and range of 2, 5, 5, 8, 10.", answer: "<strong>Mode = 5; range = 8.</strong> Five occurs most often. Range = 10 − 2 = 8." }
    ]
  },
  {
    id: "probability", term: 3, title: "Probability", symbol: "½", tone: "green",
    description: "Describe chance using fractions, decimals and percentages.",
    intro: "Probability measures how likely an event is. It ranges from 0 (impossible) to 1 (certain). For equally likely outcomes, count the favourable outcomes and divide by all possible outcomes.",
    lesson: "P(event) = number of favourable outcomes ÷ total number of equally likely outcomes. The probabilities of all possible outcomes add up to 1.",
    idea: "A fair coin has 2 equally likely outcomes, so the probability of heads is 1/2.",
    questions: [
      { prompt: "A fair six-sided die is rolled. What is the probability of rolling an even number?", answer: "<strong>1/2.</strong> The favourable outcomes are 2, 4, 6: 3 out of 6, so 3/6 = 1/2." },
      { prompt: "A bag contains 3 red and 5 blue counters. Find the probability of picking a red counter.", answer: "<strong>3/8.</strong> There are 3 favourable counters out of 3 + 5 = 8 total." },
      { prompt: "If P(rain) = 0.35, what is the probability it does not rain?", answer: "<strong>0.65.</strong> Complementary probabilities add to 1: 1 − 0.35 = 0.65." }
    ]
  },
  {
    id: "indices", term: 3, title: "Indices & Standard Form", symbol: "aⁿ", tone: "violet",
    description: "Apply index laws and express numbers in standard form.",
    intro: "An index tells you how many times a number is multiplied by itself. Index laws make calculations with powers simpler. Standard form is useful for very large and very small quantities.",
    lesson: "For the same base: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ. Any non-zero number to power 0 equals 1.",
    idea: "2³ × 2² = 2⁵ = 32. Add the indices because the base is the same.",
    questions: [
      { prompt: "Simplify 3² × 3⁴.", answer: "<strong>3⁶ = 729.</strong> Add the powers: 3² × 3⁴ = 3⁶." },
      { prompt: "Simplify 5⁶ ÷ 5².", answer: "<strong>5⁴ = 625.</strong> Subtract the powers when dividing like bases: 6 − 2 = 4." },
      { prompt: "Write 0.00052 in standard form.", answer: "<strong>5.2 × 10⁻⁴.</strong> Move the decimal 4 places right to get 5.2, so the power is −4." }
    ]
  },
  {
    id: "sequences-variation", term: 3, title: "Sequences & Variation", symbol: "↗", tone: "peach",
    description: "Recognise patterns and describe direct or inverse variation.",
    intro: "A sequence is a list that follows a rule. Find the link between terms to predict what comes next. Variation describes how one quantity changes when another changes.",
    lesson: "An arithmetic sequence has a constant difference. In direct variation, y = kx and y/x is constant. In inverse variation, y = k/x and xy is constant.",
    idea: "For 4, 7, 10, 13, ... the common difference is 3, so the next term is 16.",
    questions: [
      { prompt: "Find the next two terms: 5, 9, 13, 17, ...", answer: "<strong>21, 25.</strong> Add 4 each time." },
      { prompt: "y varies directly as x. If y = 18 when x = 6, find y when x = 10.", answer: "<strong>y = 30.</strong> k = y/x = 18/6 = 3. So y = 3 × 10 = 30." },
      { prompt: "y varies inversely as x. If y = 8 when x = 3, find y when x = 4.", answer: "<strong>y = 6.</strong> xy = k = 8 × 3 = 24. Therefore y = 24/4 = 6." }
    ]
  },
  {
    id: "trigonometry", term: 3, title: "Trigonometry", symbol: "sin", tone: "violet",
    description: "Use sine, cosine and tangent in right-angled triangles.",
    intro: "Trigonometric ratios connect an angle in a right-angled triangle to its side lengths. First identify the hypotenuse (opposite the right angle), then label the opposite and adjacent sides relative to the angle.",
    lesson: "SOH CAH TOA: sin θ = opposite/hypotenuse; cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent. Use the ratio that includes the sides you know and the side you need.",
    idea: "For an angle θ, if opposite = 3 and hypotenuse = 5, then sin θ = 3/5.",
    questions: [
      { prompt: "In a right triangle, the opposite side to θ is 6 cm and the hypotenuse is 10 cm. Find sin θ.", answer: "<strong>sin θ = 0.6.</strong> sin θ = opposite ÷ hypotenuse = 6 ÷ 10 = 0.6." },
      { prompt: "A 10 m ladder makes an angle of 30° with level ground. How high up a wall does it reach? (sin 30° = 0.5)", answer: "<strong>5 m.</strong> The ladder is the hypotenuse and the height is opposite the angle: sin 30° = height/10, so height = 10 × 0.5 = 5 m." },
      { prompt: "For angle θ, the opposite side is 7 cm and adjacent side is 24 cm. Find tan θ.", answer: "<strong>tan θ = 7/24.</strong> tan θ = opposite ÷ adjacent = 7 ÷ 24 (about 0.292)." }
    ]
  },
  {
    id: "solids-volume", term: 3, title: "Solids, Surface Area & Volume", symbol: "⬡", tone: "blue",
    description: "Identify solid shapes and calculate volume and surface area.",
    intro: "Three-dimensional shapes have length, width and height. Volume measures space inside a solid and is written in cubic units. Surface area is the sum of the areas of all its faces.",
    lesson: "Cuboid volume = length × width × height. Cube volume = side³. Prism volume = area of cross-section × length. Cuboid surface area = 2(lw + lh + wh).",
    idea: "A cuboid measuring 4 cm × 3 cm × 2 cm has volume 24 cm³.",
    questions: [
      { prompt: "Find the volume of a cuboid 8 cm by 3 cm by 5 cm.", answer: "<strong>120 cm³.</strong> Volume = length × width × height = 8 × 3 × 5." },
      { prompt: "Find the volume of a cube with side 4 cm.", answer: "<strong>64 cm³.</strong> Volume = side³ = 4 × 4 × 4." },
      { prompt: "Find the surface area of a cuboid with length 5 cm, width 3 cm and height 2 cm.", answer: "<strong>62 cm².</strong> 2(lw + lh + wh) = 2(15 + 10 + 6) = 62 cm²." }
    ]
  },
  {
    id: "transformations-scale", term: 3, title: "Transformations & Scale Drawing", symbol: "↔", tone: "rose",
    description: "Explore symmetry, reflections, translations and scale.",
    intro: "A transformation moves or changes a shape on a grid. Reflection flips it in a mirror line; translation slides it; rotation turns it. Scale drawings keep proportions while changing size.",
    lesson: "A translation is described by a movement such as 3 units right and 2 up. A scale of 1 : 50,000 means 1 unit on the map represents 50,000 of the same units on the ground.",
    idea: "At a scale of 1 : 100, a 4 cm drawing represents 4 × 100 = 400 cm, or 4 m.",
    questions: [
      { prompt: "A map scale is 1 : 50,000. What real distance does 3 cm represent?", answer: "<strong>1.5 km.</strong> 3 × 50,000 = 150,000 cm = 1,500 m = 1.5 km." },
      { prompt: "Point P is (2, 1). Translate it 3 units left and 4 units up. Give its new coordinates.", answer: "<strong>(−1, 5).</strong> Subtract 3 from x: 2 − 3 = −1. Add 4 to y: 1 + 4 = 5." },
      { prompt: "Reflect point (−3, 2) in the y-axis.", answer: "<strong>(3, 2).</strong> Reflection in the y-axis changes the sign of x but leaves y unchanged." }
    ]
  }
];

const storageKey = "maths-made-easy-jss3-progress";
const savedProgress = JSON.parse(localStorage.getItem(storageKey) || '{"completed":[],"answered":[]}');
const completedTopics = new Set(savedProgress.completed);
const answeredQuestions = new Set(savedProgress.answered);

const topicGrid = document.getElementById("topicGrid");
const modal = document.getElementById("topicModal");
const modalContent = document.getElementById("modalContent");
const searchInput = document.getElementById("topicSearch");
let activeTerm = "all";
let activeTopicId = null;
let lastFocusedElement = null;

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify({
    completed: [...completedTopics],
    answered: [...answeredQuestions]
  }));
}

function updateProgress() {
  const count = completedTopics.size;
  document.getElementById("completedCount").textContent = count;
  document.getElementById("totalTopics").textContent = topics.length;
  document.getElementById("topicCount").textContent = topics.length;
  document.getElementById("answeredCount").textContent = answeredQuestions.size;
  document.getElementById("progressBar").style.width = `${(count / topics.length) * 100}%`;
  document.getElementById("progressBar").parentElement.setAttribute("aria-label", `${count} of ${topics.length} topics completed`);
}

function renderTopics() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = topics.filter((topic) => {
    const matchesTerm = activeTerm === "all" || String(topic.term) === activeTerm;
    const matchesQuery = `${topic.title} ${topic.description} ${topic.lesson}`.toLowerCase().includes(query);
    return matchesTerm && matchesQuery;
  });

  topicGrid.innerHTML = filtered.map((topic, index) => `
    <article class="topic-card ${completedTopics.has(topic.id) ? "completed" : ""}" tabindex="0" role="button" aria-label="Open ${topic.title}" data-topic-id="${topic.id}">
      <div class="card-top">
        <span class="topic-symbol symbol-${topic.tone}">${topic.symbol}</span>
        <span class="term-badge badge-${topic.term}">Term ${topic.term}</span>
      </div>
      <h3>${topic.title}</h3>
      <p>${topic.description}</p>
      <div class="card-footer">
        <span class="card-examples"><span>✎</span> ${topic.questions.length} worked questions</span>
        <span class="${completedTopics.has(topic.id) ? "completed-label" : ""}">${completedTopics.has(topic.id) ? "✓ Completed" : `${String(index + 1).padStart(2, "0")} / ${String(filtered.length).padStart(2, "0")}`}</span>
      </div>
    </article>
  `).join("");
  document.getElementById("resultLabel").textContent = `${filtered.length} ${filtered.length === 1 ? "topic" : "topics"}`;
  document.getElementById("emptyState").hidden = filtered.length !== 0;
  topicGrid.hidden = filtered.length === 0;
}

function setTerm(term) {
  activeTerm = term;
  document.querySelectorAll("[data-term]").forEach((button) => {
    const selected = button.dataset.term === term;
    button.classList.toggle("selected", button.classList.contains("term-link") && selected);
    button.classList.toggle("active", button.classList.contains("filter-tab") && selected);
    if (button.classList.contains("term-link")) button.setAttribute("aria-current", selected ? "true" : "false");
  });
  renderTopics();
}

function openTopic(topicId) {
  const topic = topics.find((item) => item.id === topicId);
  if (!topic) return;
  activeTopicId = topicId;
  lastFocusedElement = document.activeElement;
  const completed = completedTopics.has(topic.id);
  modalContent.innerHTML = `
    <header class="modal-head">
      <div class="modal-kicker">JSS 3 MATHEMATICS · TERM ${topic.term}</div>
      <div class="modal-title-line">
        <span class="topic-symbol symbol-${topic.tone}">${topic.symbol}</span>
        <h2 id="modalTitle">${topic.title}</h2>
      </div>
      <p class="modal-intro">${topic.intro}</p>
    </header>
    <section class="lesson-box">
      <h3>Key ideas</h3>
      <p>${topic.lesson}</p>
      <div class="key-idea">${topic.idea}</div>
    </section>
    <div class="practice-heading">Worked questions <span>${topic.questions.length} questions</span></div>
    <div class="question-list">
      ${topic.questions.map((question, index) => {
        const questionId = `${topic.id}-${index}`;
        const answered = answeredQuestions.has(questionId);
        return `
          <article class="question-card" data-question-id="${questionId}">
            <div class="question-number">QUESTION ${String(index + 1).padStart(2, "0")}</div>
            <p class="question-text">${question.prompt}</p>
            <button class="reveal-button" type="button" aria-expanded="${answered}">${answered ? "Hide worked answer ↑" : "Show worked answer ↓"}</button>
            <div class="answer-box" ${answered ? "" : "hidden"}><strong>Answer &amp; working:</strong> ${question.answer}</div>
          </article>
        `;
      }).join("")}
    </div>
    <button class="mark-complete ${completed ? "is-complete" : ""}" type="button">${completed ? "✓ Topic completed" : "Mark topic as complete"}</button>
  `;
  modal.hidden = false;
  document.body.classList.add("no-scroll");
  document.getElementById("modalClose").focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("no-scroll");
  if (lastFocusedElement) lastFocusedElement.focus();
}

function updateTermCounts() {
  document.getElementById("allTotal").textContent = topics.length;
  document.getElementById("filterAll").textContent = topics.length;
  [1, 2, 3].forEach((term) => {
    const count = topics.filter((topic) => topic.term === term).length;
    document.getElementById(`term${term === 1 ? "One" : term === 2 ? "Two" : "Three"}Total`).textContent = count;
  });
}

document.getElementById("termList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-term]");
  if (button) setTerm(button.dataset.term);
});
document.querySelector(".filter-tabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-term]");
  if (button) setTerm(button.dataset.term);
});
topicGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-topic-id]");
  if (card) openTopic(card.dataset.topicId);
});
topicGrid.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-topic-id]")) {
    event.preventDefault();
    openTopic(event.target.dataset.topicId);
  }
});
searchInput.addEventListener("input", renderTopics);
document.querySelector(".search-box").addEventListener("keydown", (event) => {
  if (event.key === "/" && event.target !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
});
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});
modalContent.addEventListener("click", (event) => {
  const revealButton = event.target.closest(".reveal-button");
  if (revealButton) {
    const card = revealButton.closest(".question-card");
    const answer = card.querySelector(".answer-box");
    const isRevealed = answer.hidden;
    answer.hidden = !isRevealed;
    revealButton.setAttribute("aria-expanded", String(isRevealed));
    revealButton.textContent = isRevealed ? "Hide worked answer ↑" : "Show worked answer ↓";
    if (isRevealed) {
      answeredQuestions.add(card.dataset.questionId);
      saveProgress();
      updateProgress();
    }
    return;
  }
  if (event.target.closest(".mark-complete")) {
    if (completedTopics.has(activeTopicId)) completedTopics.delete(activeTopicId);
    else completedTopics.add(activeTopicId);
    saveProgress();
    updateProgress();
    renderTopics();
    const button = modalContent.querySelector(".mark-complete");
    const isComplete = completedTopics.has(activeTopicId);
    button.classList.toggle("is-complete", isComplete);
    button.textContent = isComplete ? "✓ Topic completed" : "Mark topic as complete";
  }
});

document.getElementById("practiceNav").addEventListener("click", () => {
  document.getElementById("syllabus").scrollIntoView({ behavior: "smooth" });
  searchInput.focus({ preventScroll: true });
});
document.getElementById("homeNav").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.querySelectorAll("[data-open-topic]").forEach((button) => {
  button.addEventListener("click", () => openTopic(button.dataset.openTopic));
});
const menuToggle = document.getElementById("menuToggle");
menuToggle.addEventListener("click", () => {
  const open = document.getElementById("sidebar").classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
document.getElementById("sidebar").addEventListener("click", (event) => {
  if (event.target.closest(".term-link") && window.innerWidth <= 760) {
    document.getElementById("sidebar").classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.getElementById("syllabus").scrollIntoView({ behavior: "smooth" });
  }
});

updateTermCounts();
updateProgress();
renderTopics();