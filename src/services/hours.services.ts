import { get, patch, post, delete_ } from 'services/api';

const url = 'https://psa-tribu2-recursos.herokuapp.com'

export async function getHours(filters:any): Promise<any> {
  let url_ = `${url}/hours?limit=50&offset=0`;

  if(filters.day){
    url_ += `&day=${filters.day}`
  }

  if(filters.user_id){
    url_ += `&user_id=${filters.user_id}`
  }

  if(filters.task_id){
    url_ += `&task_id=${filters.task_id}`
  }
  const response = await get(url_);
  return response;
}


export async function createHours(data_:any): Promise<any> {
  const response = await post(`${url}/hours`, data_);
  return response;
}
export async function editHours(data: any): Promise<any> {
  let body = {}

  if( data.day ){
    body = {
      ...body,
      day: data.day
    }
  }
  
  if( data.note ){
    body = {
      ...body,
      note: data.note
    }
  }
  if( data.hours ){
    body = {
      ...body,
      hours: data.hours
    }
  }
  if( data.minutes ){
    body = {
      ...body,
      minutes: data.minutes
    }
  }
  if( data.seconds ){
    body = {
      ...body,
      seconds: data.seconds
    }
  }
  const response = await patch(`${url}/hours/${data.id}`, body)
  return response;
}

export async function deleteHours(id:string): Promise<any> {

  const response = await delete_(`${url}/hours/${id}`);
  return response;
}