import { create } from 'zustand';
import axios from 'axios';
import Cookies from "js-cookie"

export const useStore = create((set, get) => ({

    // auth
    userID: Cookies.get("userID") || "",
    setUserID: (id) => set({userID: id}),
    username: Cookies.get("username") || "", 
    setUsername: (username) => set({username: username}),
    user: {},
    setUser: (credentials) => 
        set({
            user: credentials
        }),
    token: Cookies.get("jwt") || null,
    setToken: (token) => set({
        token
    }),
    // snippets
    snippets: [],
    setSnippets: (snippets) => {
        set({
            snippets: snippets
        })
    },
    snippetToBeEditedOrDeleted: "",
    setsnippetToBeEditedOrDeleted: (id) => set({setsnippetToBeEditedOrDeleted: id}),
    // editor
    language: "javascript",
    code: '', 
    languages: {}, // Initialize languages as an empty object
    API: axios.create({
        baseURL: "https://emkc.org/api/v2/piston/"
    }),
    backend: axios.create({
        baseURL: "http://localhost:3000/"
    }),

    setLanguage: (lang) => set({ language: lang }),
    setCode: (code) => set({ code }),


    CODE_SNIPPETS: {
        javascript: `
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alex");
`,
        typescript: `
interface Params {
    name: string;
}

function greet(data: Params) {
    console.log("Hello, " + data.name + "!");
}

greet({ name: "Alex" });
`,
        python: `def greet(name):
    print("Hello, " + name + "!")

greet("Alex")
`,
        java: `
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`,
        csharp: `
using System;

namespace HelloWorld {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Hello, World!");
        }
    }
}
`,
        php: `
<?php
$name = 'Alex';
echo "Hello, " . $name;
?>
`,
        bash: `
echo "Hello, World!"
`,
        c: `
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}
`,
        "c++": `
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
`,
        ruby: `
puts "Hello, World!"
`,
        rust: `
fn main() {
    println!("Hello, World!");
}
`,
        swift: `
print("Hello, World!")
`,
        kotlin: `
fun main() {
    println("Hello, World!")
}
`,
        lua: `
print("Hello, World!")
`,
        go: `
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
`,
        r: `
cat("Hello, World!\\n")
`,
        scala: `
object HelloWorld extends App {
    println("Hello, World!")
}
`,
        dart: `
void main() {
    print('Hello, World!');
}
`,
        perl: `
print "Hello, World!\\n";
`,
        clojure: `
(println "Hello, World!")
`,
        groovy: `
println "Hello, World!"
`,
        haskell: `
main = putStrLn "Hello, World!"
`,
        julia: `
println("Hello, World!")
`,
        fsharp: `
printfn "Hello, World!"
`,
        fortran: `
program hello
    print *, "Hello, World!"
end program hello
`,
        lisp: `
(format t "Hello, World!~%")
`,
        pascal: `
program HelloWorld;
begin
    writeln('Hello, World!');
end.
`,
        prolog: `
:- initialization(main).

main :-
    write('Hello, World!'), nl.
`,
        brainfuck: `
+[----->+++<]>.---.+++++++..+++.>++++[->++<]>+.------------.---.+++++++..+++.
`,
        assembly: `
section .data
    hello db 'Hello, World!',0

section .text
    global _start

_start:
    mov rax, 1
    mov rdi, 1
    mov rsi, hello
    mov rdx, 13
    syscall

    mov rax, 60
    xor rdi, rdi
    syscall
`,
    },
    output: 'hit run code',
    setOutput: (output) => {
        set({
        output
        })
    },
    fetchLanguages: async () => {
        try {
            const res = await get().API.get("/runtimes");
            const codeSnippets = get().CODE_SNIPPETS;
            const languages = {};
            res.data.forEach(item => {
                if (codeSnippets[item.language]) {
                    languages[item.language] = item.version;
                }
            });
            set({ languages }); 
        } catch (error) {
            console.error("Failed to fetch languages:", error.message);
        }
    },
    
}));

useStore.getState().fetchLanguages();