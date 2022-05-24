const { sendSlackMessage, contactsBook } = require('./utils');

// создать конструктор SlackGroupMates, который принимает 2 аргумента: 1 - Имя автора сообщений (Ваше имя), 2 - объект с контактами (contactsBook)
// возвращаемый объект будет иметь метод addRecepient(fullName), который будет добавлять адресата (если такой есть в книге контактов)
// addRecepient можно вызывать чкерез точку несколько раз (chaining). Если нет такого имени в списке (или просто опечатались) - он просто не добавляет адресата
// такжже нужен метод setMessage(message) - в качестве аргумента передается сообщение, и формирует сроку в виде:
// [Имя Автора] says to <@id>, <@id> : message
// метод send - просто отправляет сформированную строку в слак (ну или console.log())


function SlackGroupMates(authorName, obj) {
    this.name = authorName;
    this.contactsBook = obj;

    this.checkRecepient = function(fullName){
        if (this.contactsBook[fullName] !== undefined) {
            return true;
        }
        return false;       
    };

    this.userList = {};
    this.addRecepient = function (fullName) {
        if (this.checkRecepient(fullName)) {
            this.userList[fullName] = contactsBook[fullName];
        }
        return this;
    };

    this.someMessage = "";
    this.setMessage = function (message) {
        let ids = "";
        for (let key in this.userList) {
            ids += ids === "" ? `<@${this.userList[key]}>` : `, <@${this.userList[key]}>`;
        }
        this.someMessage = `${this.name} say to ${ids} : ${message}`;
        return this;
    };

    this.send = function(){
        sendSlackMessage(this.someMessage);
    };
}

const newObj = new SlackGroupMates("people", contactsBook)

newObj
    .addRecepient("Inna Roshcheniuk")
    .addRecepient("Mariia Mykytenko")
    .setMessage("Hello this is first message")
    //.send();

//console.log(newObj);