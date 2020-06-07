import { ReflectiveInjector, Inject, Injector } from "@angular/core"
import { environment } from 'src/environments/environment';

//入口组件
class App {
    constructor() {
        const inject = ReflectiveInjector.resolveAndCreate([
            // provide   标识符
            // useClass  useFactory
            { provide: Person, useClass: Person },
            {
                provide: Add, useFactory: () => {
                    return () => {      //创建一个新的对象,不再是池子中的对象
                        if (environment.production) return new Add('湖北', '武汉', '江夏', '青年公寓')
                        return new Add('湖北', '黄石大冶', '罗桥镇', '松山村')
                    }
                }
            },
            { provide: Id, useFactory: () => { return Id.getInstance('idCard') } }
        ])
        const person = inject.get(Person)
    }
}
//主组件
class Person {
    id: Id;
    add: Add;
    constructor(@Inject(Id) id, @Inject(Add) add) {
        //one---初始
        // this.id = Id.getInstance('idcard');
        // this.add=new Add('湖北','武汉','江夏','青年公寓')i8

        //two---改造
        this.id = id;
        this.add = add;
    }
}
//id
class Id {
    static getInstance(type: string): Id {
        return new Id()
    }
}
//add
class Add {
    pro; city; district; street
    constructor(pro, city, district, street) {
        this.pro = pro;
        this.city = city;
        this.district = district;
        this.street = street;
    }
}