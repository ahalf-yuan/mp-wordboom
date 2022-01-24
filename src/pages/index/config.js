import dataStructureSVG from "../../assets/imgs/data-structure.svg";
import databaseSVG from "../../assets/imgs/database.svg";
import websiteSVG from "../../assets/imgs/website.svg";
import wordSVG from "../../assets/imgs/word.svg";

const vocabulary = [
  {
    key: 'entryLearn',
    title: "计算机入门词汇",
    detail: "The terms and concepts in this list are defined that young students can understand.",
    icon: wordSVG,
  },
  {
    key: 'dataStructure',
    title: "数据结构词汇合集",
    detail: "数据结构中常用概念表述",
    icon: dataStructureSVG,
  },
  {
    key: 'website',
    title: "web常见词汇",
    detail: "GLOSSARY OF WEBSITE TERMS AND DEFINITIONS",
    icon: websiteSVG,
  },
  {
    key: 'database',
    title: "数据库常见词汇",
    detail: "Database Terminology – A Dictionary of the Top Database Terms",
    icon: databaseSVG,
  },
];

const cloudhost =
  "https://cloud1-2gi44ltz64d95ce2-1309250757.tcloudbaseapp.com";
const Articles = [
  {
    title: "【计算机】常见硬件设备英文表述",
    link: "/blog/2021/12/31/computer-devices.html",
    description: "",
    icon: "",
  },
  {
    title: "【数学】算术表达式英语表述",
    link: "/blog/2021/12/31/math-equation.html",
    icon: "",
  },
  {
    title: "【数字】数字类型英语中的表述",
    link: "/blog/2021/12/31/math-basic.html",
    icon: "",
  },
  {
    title: "常用标点符号在英语中的表述",
    link: "/blog/2021/12/31/others-punctuation_basic.html",
    icon: "",
  },
  {
    title: "【趣味俚语】Idioms about Colors",
    link: "/blog/2021/12/31/idiom-colors.html",
    icon: "",
  },
  {
    title: "【计算机】二叉树及二叉搜索树",
    link: "/blog/2021/12/31/computer-binary_tree.html",
    description: "",
    icon: "",
  },
  {
    title: "【计算机】OSI 7层模型和TCP/IP 4层模型",
    link: "/blog/2021/12/31/computer-OSI-model.html",
    description: "",
    icon: "",
  },
];

export { Articles, cloudhost, vocabulary };
