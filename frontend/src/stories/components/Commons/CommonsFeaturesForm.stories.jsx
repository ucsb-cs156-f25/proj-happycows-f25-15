import CommonsFeaturesForm from "main/components/Commons/CommonsFeaturesForm";
import { commonsFeaturesFixtures } from "../../../fixtures/commonsFeaturesFixtures";

export default {
  title: "components/Commons/CommonsFeaturesForm",
  component: CommonsFeaturesForm,
};

const Template = (args) => <CommonsFeaturesForm {...args} />;

export const SingleFeature = Template.bind({});
SingleFeature.args = {
  initialFeatures: commonsFeaturesFixtures.singleFeature,
  onSave: (updated) => console.log("Saved:", updated),
};

export const ThreeFeatures = Template.bind({});
ThreeFeatures.args = {
  initialFeatures: commonsFeaturesFixtures.threeFeatures,
  onSave: (updated) => console.log("Saved:", updated),
};
