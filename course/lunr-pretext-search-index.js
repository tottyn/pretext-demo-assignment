var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "statistical-thinking-activity",
  "level": "1",
  "url": "statistical-thinking-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Statistical Thinking Activity",
  "body": " Statistical Thinking Activity   Objectives: This activity highlights the statistical thinking mindset, where we observe several ways to quantitatively summarize data and then draw justified conclusions about a population.    Does this drug work?  The below table reports the number of people who became very sick after contracting an illness, broken out by if they took a particular drug. We will refer to those who took the drug as the treatment group, and those who did not take the drug as the control group. Note that the drug was not randomly assigned in this setting.  Table 1: Control — Sick: 253, Total: 151,054 Treatment — Sick: 402, Total: 47,008 Overall — Sick: 655, Total: 198,062      (a) Calculate the proportions of the control group and the treatment group who became sick, and compare the proportions. Which group had a higher rate of sickness?      (b) What other factors may we want to consider before concluding that the drug makes you more likely to get very sick after contracting the illness?      One additional factor we have access to is the age (younger or older) of the people. Below is Table 2.  Table 2: Control Younger Sick 48 Total 147,612 Control Older Sick 205 Total 3,442 Treatment Younger Sick 13 Total 25,536 Treatment Older Sick 389 Total 21,472 Overall Younger Sick 61 Total 173,148 Overall Older Sick 594 Total 24,912      (c) Explore the data in Table 2 by computing several more proportions. In particular, compute the sickness rate for:  (i) the younger control people and (ii) the younger treatment people (iii) the older control people and (iv) the older treated people      (d) Compute the proportion of older people in the control group and older people in the treated group      (e) What do you notice about the proportions you just calculated? Do these results really show that the drug does not work?     "
},
{
  "id": "statistical-thinking-activity-2-2",
  "level": "2",
  "url": "statistical-thinking-activity.html#statistical-thinking-activity-2-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Does this drug work?  The below table reports the number of people who became very sick after contracting an illness, broken out by if they took a particular drug. We will refer to those who took the drug as the treatment group, and those who did not take the drug as the control group. Note that the drug was not randomly assigned in this setting.  Table 1: Control — Sick: 253, Total: 151,054 Treatment — Sick: 402, Total: 47,008 Overall — Sick: 655, Total: 198,062   "
},
{
  "id": "statistical-thinking-activity-2-3",
  "level": "2",
  "url": "statistical-thinking-activity.html#statistical-thinking-activity-2-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  (a) Calculate the proportions of the control group and the treatment group who became sick, and compare the proportions. Which group had a higher rate of sickness?   "
},
{
  "id": "statistical-thinking-activity-2-4",
  "level": "2",
  "url": "statistical-thinking-activity.html#statistical-thinking-activity-2-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  (b) What other factors may we want to consider before concluding that the drug makes you more likely to get very sick after contracting the illness?   "
},
{
  "id": "statistical-thinking-activity-2-5",
  "level": "2",
  "url": "statistical-thinking-activity.html#statistical-thinking-activity-2-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  One additional factor we have access to is the age (younger or older) of the people. Below is Table 2.  Table 2: Control Younger Sick 48 Total 147,612 Control Older Sick 205 Total 3,442 Treatment Younger Sick 13 Total 25,536 Treatment Older Sick 389 Total 21,472 Overall Younger Sick 61 Total 173,148 Overall Older Sick 594 Total 24,912   "
},
{
  "id": "statistical-thinking-activity-2-6",
  "level": "2",
  "url": "statistical-thinking-activity.html#statistical-thinking-activity-2-6",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  (c) Explore the data in Table 2 by computing several more proportions. In particular, compute the sickness rate for:  (i) the younger control people and (ii) the younger treatment people (iii) the older control people and (iv) the older treated people   "
},
{
  "id": "statistical-thinking-activity-2-7",
  "level": "2",
  "url": "statistical-thinking-activity.html#statistical-thinking-activity-2-7",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  (d) Compute the proportion of older people in the control group and older people in the treated group   "
},
{
  "id": "statistical-thinking-activity-2-8",
  "level": "2",
  "url": "statistical-thinking-activity.html#statistical-thinking-activity-2-8",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  (e) What do you notice about the proportions you just calculated? Do these results really show that the drug does not work?   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
