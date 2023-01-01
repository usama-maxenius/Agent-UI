export function mergeSchoolPrograms(array) {
  const uniqueArray = Object.values(
    array.reduce((acc, curr) => {
      curr.programs = []; // add new programs prop
      curr.programs.push({
        questions: curr.questions,
        program: curr.program,
        OptionLabel: curr.program,
        QuestionValue: curr.program,
      });
      if (!acc[curr.schoolid]) {
        acc[curr.schoolid] = [{ ...curr }];
      } else {
        const currentSize = acc[curr.schoolid].length;

        if (currentSize === 1) {
          const alreadyExist = acc[curr.schoolid][0]?.programs?.find(
            (exist) => exist.program === curr.program
          );
          if (!alreadyExist) {
            acc[curr.schoolid][0].programs.push({
              OptionLabel: curr.program,
              QuestionValue: curr.program,
              questions: curr.questions,
              program: curr.program,
            });
          }
        }
      }
      return acc;
    }, {})
  ).flat();
  return uniqueArray;
}
