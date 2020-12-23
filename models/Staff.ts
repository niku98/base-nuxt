import moment from 'moment'

export interface Staff {
  id?: string | number
  name: string
  gender: boolean
  birthday: string | moment.Moment
  position: number
  created_at?: string | moment.Moment
}
