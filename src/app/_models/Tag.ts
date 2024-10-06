export class Tag {
    static readonly ANGULAR = new Tag ('Angular', 'red');
    static readonly TYPESCRIPT = new Tag ('TypeScript', 'darkred');
    static readonly PYTHON = new Tag ('Python', 'pink');
    static readonly JAVA = new Tag ('Java', 'orange');
    static readonly NODEJS = new Tag ('Node.JS', 'brown');
    static readonly JAVASCRIPT = new Tag ('JavaScript', 'blue');
    static readonly HTML = new Tag('HTML', 'yellow');
    static readonly CSS = new Tag('CSS', 'lightblue');
    static readonly SQL = new Tag('SQL', 'green');
    static readonly SpringBoot = new Tag('SpringBoot', 'lightred');


 



    private constructor(private readonly key:string, public readonly color:string){

    }

    toString(){

        return this.key;
    }
}