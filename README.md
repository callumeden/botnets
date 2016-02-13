# Analysing Botnet (<i>what</i>net?) and C & C

## Research: 

#### Sub topics:
* How are botnets established? `Assignee: Callum`
* What architecture and communication protocols do they use? `Asignee: Michael`
* How to detect them? `Asignee: JJ`
* How to uncover their C & C structure and behavior? `Asignee: Ben`

## Website:

#### Getting Started:

1. Clone the project: `git clone https://gitlab.doc.ic.ac.uk/g1516304/topics.git`
2. Enter project direction `cd topics`
3. Install dependencies `npm install`
4. Build! `grunt dev` 
5. Your browser should now open your local instance of the project (at <b> localhost:8080 </b>)

#### Developing:
* All main changes should be done on a separate branch
* As you make your changes, the grunt build watcher should run and rebuild. Simply refreshing the browser should then allow you to see your changes. 
* Before committing anything, run `grunt precommit`. This will run linting tasks, which identifies syntax errors in the code.
* Commit changes to your branch and push your branch to repo when done (`git push origin yourBranchName`)
* Create a merge request, add a few points describing your changes and assign it to someone in the group to give a brief review and accept the merge request