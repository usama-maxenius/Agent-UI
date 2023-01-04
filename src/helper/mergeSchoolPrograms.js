export function mergeSchoolPrograms(array) {
  const uniqueArray = Object.values(
    array.reduce((acc, curr) => {
      curr.programs = []; // add new programs prop
      curr.programs.push({
        questions: curr.questions,
        program: curr.program,
        OptionLabel: curr.program,
        QuestionValue: curr.program,
        result_identifier: curr.result_identifier,
        result_set_identifier: curr.result_set_identifier,
      });
      if (!acc[curr.schoolid]) {
        acc[curr.schoolid] = [{ ...curr }];
      } else {
        const currentSize = acc[curr.schoolid].length;

        if (currentSize === 1) {
          const alreadyExist = acc[curr.schoolid][0]?.programs?.find(
            (exist) => exist.result_identifier === curr.result_identifier
          );
          if (!alreadyExist) {
            acc[curr.schoolid][0].programs.push({
              OptionLabel: curr.program,
              QuestionValue: curr.program,
              questions: curr.questions,
              program: curr.program,
              result_identifier: curr.result_identifier,
              result_set_identifier: curr.result_set_identifier,
            });
          }
        }
      }
      return acc;
    }, {})
  ).flat();
  return uniqueArray;
}
