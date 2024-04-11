export default function condition(...clases){
    return clases.filter(Boolean).join(" ")
}