import fs from "fs";
import { Viewer } from "../../components/Md";
export default function ViewerComponent({ content}) {
    return <Viewer theme="light" md={content}/>
}

function readFiles(preset, paths, files) {
    paths.forEach(path => {
        if (fs.lstatSync(preset + path).isFile()) {
            files.push(preset + path);
        } else {
            const dirs = fs.readdirSync(preset + path);
            readFiles(preset + path + "/", dirs, files);
        }
    });
}

function readAllFiles(base) {
    const files = [];
    const dirs = fs.readdirSync(base);
    readFiles(base, dirs, files);
    return files;
}

export async function getStaticProps({ params }) {
    const file = "./" + params.type.split("-").join("/") + ".md";
    const content = fs.readFileSync(file, { encoding: "utf-8" });
    return { props: { content }};
}


// files.forEach(file => {
//     const content = fs.readFileSync(file, { encoding: "utf-8" });
//     console.log({
//         [file]: content
//     })
// })

export async function getStaticPaths() {
    const files = readAllFiles("./demo/");
    const paths = files.map(file => {
        return {
            params: {
                type: file.replace("./", "").split("/").join("-").replace(".md", "")
            }
        }
    })
    return {
        paths, fallback: false
    }
}