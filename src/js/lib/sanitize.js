/* Regular expression created on https://regex-generator.olafneumann.org/ */
export function testRegex(data) {
  const regex = /\{"0":\{"name":"[^"]*","score":\[[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",0],"upperTotal":[0-9]+,"bonus":[0-9]+,"total":[0-9]+\},"1":\{"name":"[^"]*","score":\[[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",0],"upperTotal":[0-9]+,"bonus":[0-9]+,"total":[0-9]+\},"2":\{"name":"[^"]*","score":\[[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",0],"upperTotal":[0-9]+,"bonus":[0-9]+,"total":[0-9]+\},"3":\{"name":"[^"]*","score":\[[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",[0-9]+|"-",0],"upperTotal":[0-9]+,"bonus":[0-9]+,"total":[0-9]+\}\}/i;
  return regex.test(data);
}