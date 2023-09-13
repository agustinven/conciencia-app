export const getTitleColor = (id) => {
  const colors = {
    quimica_one: "text-[#0066FF]",
    laboratorio_three: "text-[#6A00FC]",
    organica_two: "text-[#FA6800]",
    fisica_one: "text-[#7900EB]",
  };

  
  return colors[id] || "grey";
};
