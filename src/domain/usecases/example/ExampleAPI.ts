import { ExampleModel } from '@/domain/models/example/ExampleModel';
import makeAxiosHttpClient from '@/infra/http/AxiosHttpClientFactory';

const httpClient = makeAxiosHttpClient();
const URL = `/api/v1/example`;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function example(data: ExampleModel): Promise<any> {
  return httpClient.post(`${URL}/example-uri`, data);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function example2(data: ExampleModel): Promise<any> {
  return httpClient.post(`${URL}/example-uri-2`, data);
}
