import { FetchData } from "./interfaces";

export const getId = async (userName: string) => {
  const response = await fetch("https://api.twitch.tv/helix/users?login=" + userName, {
    headers: {
      "Authorization": "Bearer f8t2yesaze7ma6eb77o69ql1p34cwi",
      "Client-Id": "gp762nuuoqcoxypju8c569th9wz7q5",
    },
  });
  const data = await response.json();
  return data.data[0].id;
};

const getPredictions = async (
  userName: string,
  clientId: string,
  auth: string,
  PredictionsAmount: number = 1
) => {
  const response = await fetch(
    "https://api.twitch.tv/helix/predictions?broadcaster_id=" +
      (await getId(userName)) +
      "&first=" +
      PredictionsAmount,
    {
      headers: {
        "Authorization": "Bearer " + auth,
        "Client-Id": clientId,
      },
    }
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`${data.message}. | Status code: ${data.status}`);
  }

  const predictionData: FetchData = {
    title: data.data[0].title,
    winning_outcome_id: data.data[0].winning_outcome_id,
    status: data.data[0].status,
    remainingTime: (
      (new Date(data.data[0].created_at).getTime() +
        data.data[0].prediction_window * 1000 -
        new Date().getTime()) /
      1000
    ).toFixed(),
    outcomes: data.data[0].outcomes,
    createdAt: data.data[0].created_at,
  };

  return predictionData;
};

export default getPredictions;
