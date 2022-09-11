let courseList = document.getElementById('course-list');
let moreOptions = document.getElementById('more-options');
let dropdown_1 = document.getElementById('dropdown1');
let dropdown_2 = document.getElementById('dropdown2');
dropdown_1.addEventListener('mouseover', function over() {
    courseList.style.display = 'block';
});
dropdown_1.addEventListener('mouseout', function out() {
    courseList.style.display = 'none';
});
dropdown_2.addEventListener('mouseover', function over() {
    moreOptions.style.display = 'block';
});
dropdown_2.addEventListener('mouseout', function out() {
    moreOptions.style.display = 'none';
});

