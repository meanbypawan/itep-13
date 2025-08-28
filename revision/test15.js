// Synchronous:--
// fs.readFileSync()
// fs.writeFileSync()
// fs.appendFileSync()

// Asynchronouse
// fs.readFile()
// fs.writeFile()
// fs.appendFile()

// Large File :-
// Read/Write :-- ReadableStream :- createReadStream()
//                WritableStream :- createWriteStream() 

// Flag :- r, w, a, rw+...

// import bcrypt from "bcryptjs"

// bcrypt.genSaltSync() , bcrypt.genSalt()
// bcrypt.hasnSync() , bcrypt.hashSync()

await bcrypt.genSalt()

bcrypt.getSaltSync()
