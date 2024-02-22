export default interface ApiResponseModel {
    data?: {
        statusCode?: number
        isSuccess: boolean
        errorMessages: any[]
        result: {
            [key: string]: string
        }
    };
    error?: any;
  }