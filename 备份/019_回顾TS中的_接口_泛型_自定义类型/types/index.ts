// 暴露的方法有 3 种
// 1.默认暴露
// 2.分别暴露
// 3.统一暴露

// 定义一个接口，用于限制 person 对象的具体属性
// 分别暴露
export interface PersonInter {
  id: string,
  name: string,
  age: number
}


// 自定义类型
// export type Persons = Array<PersonInter>
export type Persons = PersonInter[]
