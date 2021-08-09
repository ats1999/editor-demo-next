import fs from "fs";
import Link from "next/link";

export default function Md({ paths }) {
    return <div>
        {paths.map(path => <p><Link key={path} href={"/md/" + path}>
            <a>{path.replace("-", " ")}</a>
        </Link>
        </p>)}
    </div>
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
    const files = readAllFiles("./demo/");
    const paths = files.map(file => {
        return file.replace("./", "").split("/").join("-").replace(".md", "");
    })
    console.log(paths)
    return { props: { paths } };
}
