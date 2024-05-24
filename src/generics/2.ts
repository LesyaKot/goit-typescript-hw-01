type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): Pick<AllType, "name" | "position" | "color" | "weight"> {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

export { compare };

//   const item: Pick<AllType, 'name' | 'color'> = { name: "car", color: "green" };
//   console.log(item);
