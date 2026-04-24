var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "statistical-thinking-activity",
  "level": "1",
  "url": "statistical-thinking-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Statistical Thinking Activity",
  "body": " Statistical Thinking Activity   Objectives: This activity highlights the statistical thinking mindset, where we observe several ways to quantitatively summarize data and then draw justified conclusions about a population.  Data Description: The below table reports the number of people who became very sick after contracting an illness, broken out by if they took a particular drug. We will refer to those who took the drug as the treatment group, and those who did not take the drug as the control group. Note that the drug was not randomly assigned in this setting. Does this drug work?   Table 1     Control  Treatment  Overall    Sick  253  402  655    Total  151,054  47,008  198,062       Calculate the proportions of the control group and the treatment group who became sick, and compare the proportions. Which group had a higher rate of sickness?      What other factors may we want to consider before concluding that the drug makes you more likely to get very sick after contracting the illness?    Including More Data: One additional factor we have access to is the age (younger or older) of the people. Below is a table that includes the data disaggregated by age group.  Table 2: Control Younger Sick 48 Total 147,612 Control Older Sick 205 Total 3,442 Treatment Younger Sick 13 Total 25,536 Treatment Older Sick 389 Total 21,472 Overall Younger Sick 61 Total 173,148 Overall Older Sick 594 Total 24,912    Explore the data in Table 2 by computing several more proportions. In particular, compute the sickness rates for: (i) the younger control people, (ii) the younger treatment people, (iii) the older control people, and (iv) the older treated people.      Compute the proportion of older people in the control group and older people in the treated group      What do you notice about the proportions you just calculated? Do these results really show that the drug does not work?     "
},
{
  "id": "table-drug-data",
  "level": "2",
  "url": "statistical-thinking-activity.html#table-drug-data",
  "type": "Table",
  "number": "1",
  "title": "Table 1",
  "body": " Table 1     Control  Treatment  Overall    Sick  253  402  655    Total  151,054  47,008  198,062    "
},
{
  "id": "statistical-thinking-activity-2-4",
  "level": "2",
  "url": "statistical-thinking-activity.html#statistical-thinking-activity-2-4",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Calculate the proportions of the control group and the treatment group who became sick, and compare the proportions. Which group had a higher rate of sickness?   "
},
{
  "id": "statistical-thinking-activity-2-5",
  "level": "2",
  "url": "statistical-thinking-activity.html#statistical-thinking-activity-2-5",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  What other factors may we want to consider before concluding that the drug makes you more likely to get very sick after contracting the illness?   "
},
{
  "id": "statistical-thinking-activity-2-8",
  "level": "2",
  "url": "statistical-thinking-activity.html#statistical-thinking-activity-2-8",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Explore the data in Table 2 by computing several more proportions. In particular, compute the sickness rates for: (i) the younger control people, (ii) the younger treatment people, (iii) the older control people, and (iv) the older treated people.   "
},
{
  "id": "statistical-thinking-activity-2-9",
  "level": "2",
  "url": "statistical-thinking-activity.html#statistical-thinking-activity-2-9",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Compute the proportion of older people in the control group and older people in the treated group   "
},
{
  "id": "statistical-thinking-activity-2-10",
  "level": "2",
  "url": "statistical-thinking-activity.html#statistical-thinking-activity-2-10",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  What do you notice about the proportions you just calculated? Do these results really show that the drug does not work?   "
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
