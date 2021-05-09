export{};
// type OptionType = {
//     value: string;
//     label: string;
//   };
  
//   const options: OptionType[] = [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
//     { value: "vanilla", label: "Vanilla" }
//   ];
  
//   const MyComponent = () => {
//     const [selectedOption, setSelectedOption] = useState<ValueType<OptionType>>(options[0]);
  
//     const handleChange = (option: ValueType<OptionType>) => {
//       setSelectedOption(option);
//     };
  
//     return (
//       <Select
//         value={selectedOption}
//         onChange={option => handleChange(option)}
//         options={options}
//       />
//     );
//   };