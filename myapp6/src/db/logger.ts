export default {
    log: (...data: any[]) => console.log(...data),
    error: (message?: any, ...optionalParams: any[]) => console.error(message, ...optionalParams),
  };