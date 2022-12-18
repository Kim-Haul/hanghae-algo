all_students = ["나연", "정연", "모모", "사나", "지효", "미나", "다현", "채영", "쯔위", "하나"];
present_students = ["정연", "모모", "채영", "쯔위", "사나", "나연", "미나", "다현"];

const get_absent_student = (all_array, present_array) => {
  let absent_student = [];
  for (i = 0; i < all_array.length; i++) {
    if (present_array.includes(all_array[i]) == false) {
      absent_student.push(all_array[i]);
    }
  }
  return absent_student;
};

console.log(get_absent_student(all_students, present_students));
