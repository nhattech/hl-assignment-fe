import { Space } from "antd";
import React, { useState } from "react";
import { AppAction, AppBanner, AppMessage } from "../components";

const jokes = [
  {
    id: 1,
    contents: `A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."', 'The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."', 'The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."`,
  },
  {
    id: 2,
    contents: `Teacher: "Kids,what does the chicken give you?"', 'Student: "Meat!"', 'Teacher: "Very good! Now what does the pig give you?"', 'Student: "Bacon!"', 'Teacher: "Great! And what does the fat cow give you?"', 'Student: "Homework!"`,
  },
  {
    id: 3,
    contents: `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`,
  },
  {
    id: 4,
    contents: `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
  },
  {
    id: 5,
    contents: `That's all the jokes for today! Come back another day!`,
  },
];

function AppContent() {
  const [data, setData] = useState(jokes[0]);

  const handleNotFunny = (value) => {
    setData(jokes[jokes.length - 1]);
  };
  const handleFunny = (value) => {
    if (data.id === jokes.length) {
      return;
    }
    setData(jokes[data.id]);
  };

  const handlAction = {
    handleFunny,
    handleNotFunny,
  };

  return (
    <Space className="AppContent" direction="vertical" style={{ marginTop: 2, display: "flex", width: "100%" }}>
      <AppBanner />
      <AppMessage data={data} />
      <AppAction action={handlAction} />
    </Space>
  );
}

export { AppContent };
