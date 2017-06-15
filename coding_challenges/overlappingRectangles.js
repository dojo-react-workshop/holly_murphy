// looking for code that is the most readable

// 2 objects will be passed and we are to return the overlapping rectangle
// if they don't overlap, return null for each of the values or just return null rather than an object

const obj_1 = {
    leftX: 1,
    bottomY: 2,
    width: 3,
    height: 4
}

const obj_2 = {
    leftX: 2,
    bottomY: 4,
    width: 1,
    height: 3
}

// function overlap(obj1, obj2){
//     let result = {
//         leftX = null,
//         bottomY = null,
//         width = null,
//         height = null
//     }
//     let break = false;
//     for (let x=obj1.leftX, x <= obj1.leftX + obj1.width; x++){
//         for (let y=obj1.bottomY, y <= obj1.bottomY + obj1.height; y++){
//             let insideX=(x > obj2.leftX && x <= obj2.leftX + obj2.width);
//             let insideY=(y > obj2.bottomY && y <= obj2.bottomY + obj2.height);
//             if (insideX && insideY){
//                 if (result.leftX === null){
//                     result.leftX =x;
//                     result.bottomY = y;
//                     break = true;
//                     break;
//                 }
//             }
//         }
//         if (break) break;
//     }
//     if(result.leftX != null){
//         result.width = math.min(obj1.leftX + obj1.width, obj2.leftX + obj2.width) - result.leftX;
//         result.height = math.min(obj1.bottomY + obj2.height, obj2.bottomY + obj2.height) - result.bottomY;
//     }
//     return result;
// }
// const obj1 = []
// const obj2 = []
// console.log(overlap(obj1, obj2))

function getCommonRectangle(rectangleA, rectangleB){
    const xOverlap = getOverlap(rectangleA.leftX, rectangleA.width, rectangleB.leftX, rectangleB.width);
    const yOverlap = getOverlap(rectangleA.bottomY, rectangleA.height, rectangleB.bottomY, rectangleB.height);

    if(xOverlap === null || yOverlap === null){
        return null;
    }

    return {
        leftX: xOverlap.startPoint,
        bottomY: yOverlap.startPoint,
        width: xOverlap.length,
        height: yOverlap.length
    }
}

function getOverlap(pointA, lengthA, pointB, lengthB){
    const startPoint = Math.max(pointA, pointB);
    const endPoint = Math.min(pointA + lengthA, pointB + lengthB)

    //make sure the start is less than the end (even if equal, will not have overlap)
    if(startPoint >= endPoint){
        return null;
    }

    return {
        startPoint, //startPoint: startPoint
        length: endPoint - startPoint
    }
}

console.log(getCommonRectangle(obj_1, obj_2))