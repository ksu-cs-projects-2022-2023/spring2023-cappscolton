
## Overview
Concepts for a more modular, effective, and targetted style of teaching have been
introduced at Kansas State University by Nathan Bean and Russell Feldhausen - two CS
instructors. This project is intended to implement a platform that supports these concepts
and integrate with LMS (Canvas) via a webapp using the IMS LTI standard. An ELA is
an equivalent learning activity. Activities are equivalent if they teach the same concept
and provide similar level of scaffolding/support to the student. This concept is also based
on research that developed a Universal Design for Learning (UDL). Additionally, using
ELAs will enable teachers to better adhere to a concept called Mastery Learning, which is
a method of learning which is shown to be effective by research. Enabling use of ELAs
will allow teachers and students to begin aligning instruction to UDL and Mastery
Learning.
### Problem
Teaching styles within many classrooms are not as effective as they could be. Adopting
some methods relating to UDL and Mastery Learning will help more students learn
effectively. Manually acheiving this would require increased staffing - yet the national
demand for teachers is also increasing, so this is not super feasible.
### Solution
Instead, classrooms can use software (such as an ELA platform) to deliver ELAs, but this
software doesn't exist yet. Design a webapp that can deliver ELAs in an intuitive way.
Algorithmic Functionality
One significant bit of algorithmic functionality will be a formula for mastery learning.
This project intends to track and measure student outcomes on ELAs and use that data to
determine whether a student has acheived partial or full mastery on a subject. Developing
this formula will most likely require feedback from teachers and a study of existing
mastery learning research.
### Qualifications
1
I have about 2 years of enterprise software development experience, mostly working with
webapps. A portion of this time was spent maintaining LTI applications for KSU (Teval,
Attendance, etc). Therefore, I am familiar with both LTI applications and webapps.
I don't know whether anyone is concerned with this, but I will be using cloud
infrastructure for this webapp. Over the past two years, I gained certifications in cloud
infrastructure. As my feature list indicates, I intend to spend time on infrastructure as
code.
## Feature Lists
### Minimum Viable Product (MVP):
⦁ Webapp communicates with LMS (Canvas) using LTI standard
⦁ Webapp provides ability to switch between at least two assignment candidates for
an ELA
⦁ Webapp communicates with 1 external activity provider (priority: Codio)
⦁ Webapp has a basic UI
### 1.0
⦁ Platform provides a BASIC method of measuring Mastery Learning
⦁ Webapp stores and tracks individual student data gathered from ELA participation
⦁ Webapp has a teacher-only UI section
⦁ Webapp communicates with 2 or more external activity providers
⦁ Webapp consistently determines equivalency between activities using metadata
criteria
### 2.0
⦁ Platform provides a research-backed method of measuring Mastery Learning
⦁ Webapp has a unifying interface, allowing easy integration of new ELA sets
⦁ Webapp has a polished UI
2
⦁ Platform utilizes PEML to determine equivalency
⦁ Create terraform / cloudformation / IaC and/or containerize
3
