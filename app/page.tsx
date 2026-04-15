"use client";

import { useState } from "react";

export default function Page() {
  const [stress, setStress] = useState(3);
  const [response, setResponse] = useState("");

  const handleClick = () => {
    let message = "";

    if (stress >= 4) {
      message = "かなり疲れてますね。今日は早めに休みましょう。";
    } else if (stress === 3) {
      message = "少し疲れ気味です。軽くリフレッシュがおすすめです。";
    } else {
      message = "いい状態です。この調子を維持しましょう。";
    }

    setResponse(message);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>ストレスチェック</h2>

      <p>現在のストレスレベル：{stress}</p>

      <input
        type="range"
        min="1"
        max="5"
        value={stress}
        onChange={(e) => setStress(Number(e.target.value))}
      />

      <br />
      <br />

      <button onClick={handleClick}>AIに相談する</button>

      <p>{response}</p>
    </div>
  );
}
