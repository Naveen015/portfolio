import frisbee from "@assets/extras/frisbee.jpeg";
import football from "@assets/extras/football.jpeg";
import trekking from "@assets/extras/hiking2.jpeg";
import marathon from "@assets/extras/marathon.jpeg";

const groupCardConfig = {
  xs: "1",
  md: "3",
  className: "g-4",
};

const artData = [
  {
    cardConfig: {},
    isVideo: false,
    src: trekking,
    srcConfig: {
      variant: "top",
      style: { display: "block", height: "100%", width: "100%" },
    },
    header: "",
    headerConfig: {},
    title: "Trekking",
    body: "",
    footer: "",
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
  {
    cardConfig: {},
    isVideo: false,
    src: marathon,
    srcConfig: {
      variant: "top",
      style: { display: "block", height: "100%", width: "100%" },
    },
    header: "",
    headerConfig: {},
    title: "Marathon",
    body: "",
    footer: "",
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
  {
    cardConfig: {},
    isVideo: false,
    src: frisbee,
    srcConfig: {
      variant: "top",
      style: { display: "block", height: "100%", width: "100%" },
    },
    header: "",
    headerConfig: {},
    title: "Frisbee",
    body: "",
    footer: "",
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
  {
    cardConfig: {},
    isVideo: false,
    src: football,
    srcConfig: {
      variant: "top",
      style: { display: "block", height: "100%", width: "100%" },
    },
    header: "",
    headerConfig: {},
    title: "Football",
    body: "",
    footer: "",
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
];

export { groupCardConfig, artData };
