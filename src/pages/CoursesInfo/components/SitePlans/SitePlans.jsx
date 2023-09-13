import React from 'react'
import * as compSource from "../../../../components"
import { PlanCard } from '../PlanCard/PlanCard';

export const SitePlans = () => {
  const plans = [
    {
      title: "Plan Silver",
      price: "$10.000 ARS ahora $7.500 ARS",
      financed_price: "$2.500 ARS",
      features: [
        { name: "Acceso a los más de 80 talleres", available: true },
        { name: "Ebooks descargables", available: false },
        {
          name: "Planner 2022/2023 (Programa anual de creación de contenidos",
          available: false,
        },
        { name: "Espacio privado para consultar dudas", available: false },
      ],
      isGold: false,
    },
    {
      title: "Plan Gold",
      price: "$10.000 ARS ahora $7.500 ARS",
      financed_price: "$2.500 ARS",
      features: [
        { name: "Acceso a los más de 80 talleres", available: true },
        { name: "Ebooks descargables", available: true },
        {
          name: "Planner 2022/2023 (Programa anual de creación de contenidos",
          available: true,
        },
        { name: "Espacio privado para consultar dudas", available: true },
      ],
      isGold: true,
    },
  ];

  return (
    <div className="mb-48">
      <compSource.TitlePresentation
        h1="Conoce nuestros planes"
        p="Elegi el plan que mas se amolde a tus necesidades."
        bgColor="text-[#4086FF]"
      />
      <div className="max-w-[1300px] flex flex-row mx-auto">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>

    </div>
  );
}

