import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {toast} from "react-toastify";

function Services() {
  const Wraper = styled.div`
    .countdown-container {
      background-color: rgb(8 10 12);
      border-radius: 15px;
      padding: 40px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      max-width: 75%;
      margin: 0 auto;
    }
    .time-box {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
    }
    .countdown {
      display: flex;
      justify-content: space-between;
      font-size: 32px;
      margin-top: 20px;
    }

    .time-box {
      flex: 1;
      margin: 0 10px;
      background: #191b1c;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      transition: transform 0.2s;
    }

    .time-box:hover {
      transform: scale(1.05);
    }

    .time-box span {
      display: block;
      font-size: 48px;
      font-weight: bold;
      color: #dadee1;
    }

    .label {
      font-size: 18px;
      color: #555;
    }

    h1 {
      margin: 0;
      transition: transform 0.5s;
    }

    .shake {
      animation: shake 0.5s;
      animation-iteration-count: infinite;
    }

    @keyframes shake {
      0%,
      100% {
        transform: translate(0);
      }
      25% {
        transform: translate(-5px);
      }
      50% {
        transform: translate(5px);
      }
      75% {
        transform: translate(-5px);
      }
    }

    .fade-out {
      animation: fadeOut 1s forwards;
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
      .full-height {
    height: 390px;
    display: flex;
    align-items: center;
    justify-content: center;
}
    @media (max-width: 768px) {
      .countdown {
        font-size: 24px;
        flex-wrap: wrap;
        gap: 10px;
      }
              .full-height {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
      .countdown-container {
        max-width: 100%;
      }
    }
  `;

  const [timeLeft, settimeleft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59").getTime();

    const interval = setInterval(() => {
      const curentTime = new Date().getTime();
      const timeDifference = targetDate - curentTime;
      if (timeDifference <= 0) {
        clearInterval(interval);
        settimeleft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        settimeleft({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Wraper>
      
      <div className="full-height">
        <div className="container-fluid">
          <h1 className="cmg-soon">Comming soon</h1>
          <div className="countdown-container">
            <div className="countdown" id="countdown">
              <div className="time-box">
                <span id="days">{timeLeft.days}</span>
                <div className="label">Days</div>
              </div>
              <div className="time-box">
                <span id="hours">{timeLeft.hours}</span>
                <div className="label">Hours</div>
              </div>
              <div className="time-box">
                <span id="minutes">{timeLeft.minutes}</span>
                <div className="label">Minutes</div>
              </div>
              <div className="time-box">
                <span id="seconds">{timeLeft.seconds}</span>
                <div className="label">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wraper>
  );
}

export default Services;
