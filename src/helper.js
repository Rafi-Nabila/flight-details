export const TimeConvert = (n) => {
    let num = n;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + " h " + rminutes;
};

export const ReturnStopText = (stop) => {
    if (stop === 0) return "Direct";
    if (stop === 1) return "1 stop";
    return `${stop} stops`;
  };

export const ReturnTime = (time) => {
    const hours = new Date(time).getHours();
    const mins = new Date(time).getMinutes();

    return `${hours} : ${mins < 10 ? "0" : ""}${mins}`;
  };
