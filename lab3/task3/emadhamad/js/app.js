import { courses } from "./courses.api.js";

const students = document.querySelectorAll(".home__students-ph");
console.log("🚀 ~ file: app.js ~ line 2 ~ students", students);

students.forEach((stud, index) => {
	stud.style.backgroundImage = `url(./image/home/students/${index + 1}.jpg)`;
	stud.style.backgroundSize = `cover`;
	stud.style.backgroundPosition = `center`;
});

const coursesContainer = document.querySelector(".courses__content");

courses.forEach((el) => {
	const courseItem = document.createElement("div");
	courseItem.className = `courses__content-box`;

	const coursesImg = document.createElement("img");
	coursesImg.className = `course__content-img`;
	coursesImg.src = `./image/courses/${el.pic}.png`;

	const courseCount = document.createElement("div");
	courseCount.className = `courses__content-count`;
	courseCount.textContent = el.courseVideos;

	const courseIndustry = document.createElement("div");
	courseIndustry.className = `courses__content-industry`;
	courseIndustry.textContent = el.courseSubj;

	const courseTitle = document.createElement("div");
	courseTitle.className = `course__content-title`;
	courseTitle.textContent = el.courseName;

	const courseText = document.createElement("div");
	courseText.className = `course__content-text`;
	courseText.textContent = el.courseTitle;

	const courseProf = document.createElement("div");
	courseProf.className = `course__content-position`;
	courseProf.textContent = el.courseAuthorPos;

	const courseAuthor = document.createElement("div");
	courseAuthor.className = `course__content-author`;

	const courseAuthorName = document.createElement("div");
	courseAuthorName.className = `course__content-name`;
	courseAuthorName.textContent = el.courseAuthor;

	const courseButt = document.createElement("button");
	courseButt.className = "courses__content-access";
	courseButt.textContent = "Access Class";

	const line = document.createElement("hr");

	const courseAuthorPhoto = document.createElement("img");
	courseAuthorPhoto.className = `courses__content-photo`;
	courseAuthorPhoto.src = `./image/courses/mentors/${el.pic}.png`;
	courseAuthor.append(courseAuthorPhoto);
	courseAuthor.append(courseAuthorName);
	courseAuthorName.append(courseProf);

	courseItem.append(coursesImg);
	courseItem.append(courseCount);
	courseItem.append(courseIndustry);
	courseItem.append(courseTitle);
	courseItem.append(courseText);
	courseItem.append(line);
	courseItem.append(courseAuthor);
	courseItem.append(courseButt);

	coursesContainer.append(courseItem);
});
