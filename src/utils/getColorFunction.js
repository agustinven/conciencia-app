export const getColor = (id) => {
  const colors = {
    quimica_one: "bg-[#0066FF]",
    laboratorio_three: "bg-[#6A00FC]",
    organica_two: "bg-[#FA6800]",
    fisica_one: "bg-[#7900EB]",
  };

  return colors[id] || "grey";
};

