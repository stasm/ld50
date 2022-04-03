import {Mesh} from "../common/mesh.js";
import {
    GL_ARRAY_BUFFER,
    GL_ELEMENT_ARRAY_BUFFER,
    GL_FLOAT,
    GL_STATIC_DRAW,
} from "../common/webgl.js";
import {Attribute} from "../materials/layout.js";

export function mesh_body(gl: WebGL2RenderingContext): Mesh {
    let vao = gl.createVertexArray()!;
    gl.bindVertexArray(vao);

    let vertex_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, vertex_buf);
    gl.bufferData(GL_ARRAY_BUFFER, vertex_arr, GL_STATIC_DRAW);
    gl.enableVertexAttribArray(Attribute.Position);
    gl.vertexAttribPointer(Attribute.Position, 3, GL_FLOAT, false, 0, 0);

    let normal_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, normal_buf);
    gl.bufferData(GL_ARRAY_BUFFER, normal_arr, GL_STATIC_DRAW);
    gl.enableVertexAttribArray(Attribute.Normal);
    gl.vertexAttribPointer(Attribute.Normal, 3, GL_FLOAT, false, 0, 0);

    let texcoord_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, texcoord_buf);
    gl.bufferData(GL_ARRAY_BUFFER, texcoord_arr, GL_STATIC_DRAW);
    gl.enableVertexAttribArray(Attribute.TexCoord);
    gl.vertexAttribPointer(Attribute.TexCoord, 2, GL_FLOAT, false, 0, 0);

    let weights_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, weights_buf);
    gl.bufferData(GL_ARRAY_BUFFER, weights_arr, GL_STATIC_DRAW);
    gl.enableVertexAttribArray(Attribute.Weights);
    gl.vertexAttribPointer(Attribute.Weights, 4, GL_FLOAT, false, 0, 0);

    let index_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, index_buf);
    gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, index_arr, GL_STATIC_DRAW);

    gl.bindVertexArray(null);

    return {
        Vao: vao,
        VertexBuffer: vertex_buf,
        VertexArray: vertex_arr,
        NormalBuffer: normal_buf,
        NormalArray: normal_arr,
        TexCoordBuffer: texcoord_buf,
        TexCoordArray: texcoord_arr,
        WeightsBuffer: weights_buf,
        WeightsArray: weights_arr,
        IndexBuffer: index_buf,
        IndexArray: index_arr,
        IndexCount: index_arr.length,
    };
}

// prettier-ignore
let vertex_arr = Float32Array.from([
    0.6160, 0.4400, -1.0000,
    0.6160, 0.4400, -1.0000,
    0.6160, 0.4400, -1.0000,
    0.6160, 0.4400, -1.0000,
    0.6160, 1.0000, -0.4400,
    0.6160, 1.0000, -0.4400,
    0.6160, 1.0000, -0.4400,
    0.6160, 1.0000, -0.4400,
    1.4000, 0.4400, -0.4400,
    1.4000, 0.4400, -0.4400,
    1.4000, 0.4400, -0.4400,
    1.4000, 0.4400, -0.4400,
    0.6160, 0.7196, -0.9252,
    0.6160, 0.7196, -0.9252,
    0.6160, 0.7196, -0.9252,
    0.6160, 0.7196, -0.9252,
    1.0075, 0.4400, -0.9252,
    1.0075, 0.4400, -0.9252,
    1.0075, 0.4400, -0.9252,
    1.0075, 0.4400, -0.9252,
    0.9909, 0.7078, -0.8525,
    0.9909, 0.7078, -0.8525,
    0.9909, 0.7078, -0.8525,
    0.9909, 0.7078, -0.8525,
    1.0075, 0.9252, -0.4400,
    1.0075, 0.9252, -0.4400,
    1.0075, 0.9252, -0.4400,
    1.0075, 0.9252, -0.4400,
    0.6160, 0.9252, -0.7196,
    0.6160, 0.9252, -0.7196,
    0.6160, 0.9252, -0.7196,
    0.6160, 0.9252, -0.7196,
    0.9909, 0.8525, -0.7078,
    0.9909, 0.8525, -0.7078,
    0.9909, 0.8525, -0.7078,
    0.9909, 0.8525, -0.7078,
    1.2953, 0.4400, -0.7196,
    1.2953, 0.4400, -0.7196,
    1.2953, 0.4400, -0.7196,
    1.2953, 0.4400, -0.7196,
    1.2953, 0.7196, -0.4400,
    1.2953, 0.7196, -0.4400,
    1.2953, 0.7196, -0.4400,
    1.2953, 0.7196, -0.4400,
    1.1935, 0.7078, -0.7078,
    1.1935, 0.7078, -0.7078,
    1.1935, 0.7078, -0.7078,
    1.1935, 0.7078, -0.7078,
    0.6160, -1.0000, -0.4400,
    0.6160, -1.0000, -0.4400,
    0.6160, -1.0000, -0.4400,
    0.6160, -1.0000, -0.4400,
    0.6160, -0.4400, -1.0000,
    0.6160, -0.4400, -1.0000,
    0.6160, -0.4400, -1.0000,
    0.6160, -0.4400, -1.0000,
    1.4000, -0.4400, -0.4400,
    1.4000, -0.4400, -0.4400,
    1.4000, -0.4400, -0.4400,
    1.4000, -0.4400, -0.4400,
    0.6160, -0.9252, -0.7196,
    0.6160, -0.9252, -0.7196,
    0.6160, -0.9252, -0.7196,
    0.6160, -0.9252, -0.7196,
    1.0075, -0.9252, -0.4400,
    1.0075, -0.9252, -0.4400,
    1.0075, -0.9252, -0.4400,
    1.0075, -0.9252, -0.4400,
    0.9909, -0.8525, -0.7078,
    0.9909, -0.8525, -0.7078,
    0.9909, -0.8525, -0.7078,
    0.9909, -0.8525, -0.7078,
    1.0075, -0.4400, -0.9252,
    1.0075, -0.4400, -0.9252,
    1.0075, -0.4400, -0.9252,
    1.0075, -0.4400, -0.9252,
    0.6160, -0.7196, -0.9252,
    0.6160, -0.7196, -0.9252,
    0.6160, -0.7196, -0.9252,
    0.6160, -0.7196, -0.9252,
    0.9909, -0.7078, -0.8525,
    0.9909, -0.7078, -0.8525,
    0.9909, -0.7078, -0.8525,
    0.9909, -0.7078, -0.8525,
    1.2953, -0.7196, -0.4400,
    1.2953, -0.7196, -0.4400,
    1.2953, -0.7196, -0.4400,
    1.2953, -0.7196, -0.4400,
    1.2953, -0.4400, -0.7196,
    1.2953, -0.4400, -0.7196,
    1.2953, -0.4400, -0.7196,
    1.2953, -0.4400, -0.7196,
    1.1935, -0.7078, -0.7078,
    1.1935, -0.7078, -0.7078,
    1.1935, -0.7078, -0.7078,
    1.1935, -0.7078, -0.7078,
    1.4000, 0.4400, 0.4400,
    1.4000, 0.4400, 0.4400,
    1.4000, 0.4400, 0.4400,
    1.4000, 0.4400, 0.4400,
    0.6160, 1.0000, 0.4400,
    0.6160, 1.0000, 0.4400,
    0.6160, 1.0000, 0.4400,
    0.6160, 1.0000, 0.4400,
    0.6160, 0.4400, 1.0000,
    0.6160, 0.4400, 1.0000,
    0.6160, 0.4400, 1.0000,
    0.6160, 0.4400, 1.0000,
    1.2953, 0.7196, 0.4400,
    1.2953, 0.7196, 0.4400,
    1.2953, 0.7196, 0.4400,
    1.2953, 0.7196, 0.4400,
    1.2953, 0.4400, 0.7196,
    1.2953, 0.4400, 0.7196,
    1.2953, 0.4400, 0.7196,
    1.2953, 0.4400, 0.7196,
    1.1935, 0.7078, 0.7078,
    1.1935, 0.7078, 0.7078,
    1.1935, 0.7078, 0.7078,
    1.1935, 0.7078, 0.7078,
    0.6160, 0.9252, 0.7196,
    0.6160, 0.9252, 0.7196,
    0.6160, 0.9252, 0.7196,
    0.6160, 0.9252, 0.7196,
    1.0075, 0.9252, 0.4400,
    1.0075, 0.9252, 0.4400,
    1.0075, 0.9252, 0.4400,
    1.0075, 0.9252, 0.4400,
    0.9909, 0.8525, 0.7078,
    0.9909, 0.8525, 0.7078,
    0.9909, 0.8525, 0.7078,
    0.9909, 0.8525, 0.7078,
    1.0075, 0.4400, 0.9252,
    1.0075, 0.4400, 0.9252,
    1.0075, 0.4400, 0.9252,
    1.0075, 0.4400, 0.9252,
    0.6160, 0.7196, 0.9252,
    0.6160, 0.7196, 0.9252,
    0.6160, 0.7196, 0.9252,
    0.6160, 0.7196, 0.9252,
    0.9909, 0.7078, 0.8525,
    0.9909, 0.7078, 0.8525,
    0.9909, 0.7078, 0.8525,
    0.9909, 0.7078, 0.8525,
    1.4000, -0.4400, 0.4400,
    1.4000, -0.4400, 0.4400,
    1.4000, -0.4400, 0.4400,
    1.4000, -0.4400, 0.4400,
    0.6160, -0.4400, 1.0000,
    0.6160, -0.4400, 1.0000,
    0.6160, -0.4400, 1.0000,
    0.6160, -0.4400, 1.0000,
    0.6160, -1.0000, 0.4400,
    0.6160, -1.0000, 0.4400,
    0.6160, -1.0000, 0.4400,
    0.6160, -1.0000, 0.4400,
    1.2953, -0.4400, 0.7196,
    1.2953, -0.4400, 0.7196,
    1.2953, -0.4400, 0.7196,
    1.2953, -0.4400, 0.7196,
    1.2953, -0.7196, 0.4400,
    1.2953, -0.7196, 0.4400,
    1.2953, -0.7196, 0.4400,
    1.2953, -0.7196, 0.4400,
    1.1935, -0.7078, 0.7078,
    1.1935, -0.7078, 0.7078,
    1.1935, -0.7078, 0.7078,
    1.1935, -0.7078, 0.7078,
    0.6160, -0.7196, 0.9252,
    0.6160, -0.7196, 0.9252,
    0.6160, -0.7196, 0.9252,
    0.6160, -0.7196, 0.9252,
    1.0075, -0.4400, 0.9252,
    1.0075, -0.4400, 0.9252,
    1.0075, -0.4400, 0.9252,
    1.0075, -0.4400, 0.9252,
    0.9909, -0.7078, 0.8525,
    0.9909, -0.7078, 0.8525,
    0.9909, -0.7078, 0.8525,
    0.9909, -0.7078, 0.8525,
    1.0075, -0.9252, 0.4400,
    1.0075, -0.9252, 0.4400,
    1.0075, -0.9252, 0.4400,
    1.0075, -0.9252, 0.4400,
    0.6160, -0.9252, 0.7196,
    0.6160, -0.9252, 0.7196,
    0.6160, -0.9252, 0.7196,
    0.6160, -0.9252, 0.7196,
    0.9909, -0.8525, 0.7078,
    0.9909, -0.8525, 0.7078,
    0.9909, -0.8525, 0.7078,
    0.9909, -0.8525, 0.7078,
    -0.6160, 0.4400, -1.0000,
    -0.6160, 0.4400, -1.0000,
    -0.6160, 0.4400, -1.0000,
    -0.6160, 0.4400, -1.0000,
    -1.4000, 0.4400, -0.4400,
    -1.4000, 0.4400, -0.4400,
    -1.4000, 0.4400, -0.4400,
    -1.4000, 0.4400, -0.4400,
    -0.6160, 1.0000, -0.4400,
    -0.6160, 1.0000, -0.4400,
    -0.6160, 1.0000, -0.4400,
    -0.6160, 1.0000, -0.4400,
    -1.0075, 0.4400, -0.9252,
    -1.0075, 0.4400, -0.9252,
    -1.0075, 0.4400, -0.9252,
    -1.0075, 0.4400, -0.9252,
    -0.6160, 0.7196, -0.9252,
    -0.6160, 0.7196, -0.9252,
    -0.6160, 0.7196, -0.9252,
    -0.6160, 0.7196, -0.9252,
    -0.9909, 0.7078, -0.8525,
    -0.9909, 0.7078, -0.8525,
    -0.9909, 0.7078, -0.8525,
    -0.9909, 0.7078, -0.8525,
    -1.2953, 0.7196, -0.4400,
    -1.2953, 0.7196, -0.4400,
    -1.2953, 0.7196, -0.4400,
    -1.2953, 0.7196, -0.4400,
    -1.2953, 0.4400, -0.7196,
    -1.2953, 0.4400, -0.7196,
    -1.2953, 0.4400, -0.7196,
    -1.2953, 0.4400, -0.7196,
    -1.1935, 0.7078, -0.7078,
    -1.1935, 0.7078, -0.7078,
    -1.1935, 0.7078, -0.7078,
    -1.1935, 0.7078, -0.7078,
    -0.6160, 0.9252, -0.7196,
    -0.6160, 0.9252, -0.7196,
    -0.6160, 0.9252, -0.7196,
    -0.6160, 0.9252, -0.7196,
    -1.0075, 0.9252, -0.4400,
    -1.0075, 0.9252, -0.4400,
    -1.0075, 0.9252, -0.4400,
    -1.0075, 0.9252, -0.4400,
    -0.9909, 0.8525, -0.7078,
    -0.9909, 0.8525, -0.7078,
    -0.9909, 0.8525, -0.7078,
    -0.9909, 0.8525, -0.7078,
    -1.4000, -0.4400, -0.4400,
    -1.4000, -0.4400, -0.4400,
    -1.4000, -0.4400, -0.4400,
    -1.4000, -0.4400, -0.4400,
    -0.6160, -0.4400, -1.0000,
    -0.6160, -0.4400, -1.0000,
    -0.6160, -0.4400, -1.0000,
    -0.6160, -0.4400, -1.0000,
    -0.6160, -1.0000, -0.4400,
    -0.6160, -1.0000, -0.4400,
    -0.6160, -1.0000, -0.4400,
    -0.6160, -1.0000, -0.4400,
    -1.2953, -0.4400, -0.7196,
    -1.2953, -0.4400, -0.7196,
    -1.2953, -0.4400, -0.7196,
    -1.2953, -0.4400, -0.7196,
    -1.2953, -0.7196, -0.4400,
    -1.2953, -0.7196, -0.4400,
    -1.2953, -0.7196, -0.4400,
    -1.2953, -0.7196, -0.4400,
    -1.1935, -0.7078, -0.7078,
    -1.1935, -0.7078, -0.7078,
    -1.1935, -0.7078, -0.7078,
    -1.1935, -0.7078, -0.7078,
    -0.6160, -0.7196, -0.9252,
    -0.6160, -0.7196, -0.9252,
    -0.6160, -0.7196, -0.9252,
    -0.6160, -0.7196, -0.9252,
    -1.0075, -0.4400, -0.9252,
    -1.0075, -0.4400, -0.9252,
    -1.0075, -0.4400, -0.9252,
    -1.0075, -0.4400, -0.9252,
    -0.9909, -0.7078, -0.8525,
    -0.9909, -0.7078, -0.8525,
    -0.9909, -0.7078, -0.8525,
    -0.9909, -0.7078, -0.8525,
    -1.0075, -0.9252, -0.4400,
    -1.0075, -0.9252, -0.4400,
    -1.0075, -0.9252, -0.4400,
    -1.0075, -0.9252, -0.4400,
    -0.6160, -0.9252, -0.7196,
    -0.6160, -0.9252, -0.7196,
    -0.6160, -0.9252, -0.7196,
    -0.6160, -0.9252, -0.7196,
    -0.9909, -0.8525, -0.7078,
    -0.9909, -0.8525, -0.7078,
    -0.9909, -0.8525, -0.7078,
    -0.9909, -0.8525, -0.7078,
    -1.4000, 0.4400, 0.4400,
    -1.4000, 0.4400, 0.4400,
    -1.4000, 0.4400, 0.4400,
    -1.4000, 0.4400, 0.4400,
    -0.6160, 0.4400, 1.0000,
    -0.6160, 0.4400, 1.0000,
    -0.6160, 0.4400, 1.0000,
    -0.6160, 0.4400, 1.0000,
    -0.6160, 1.0000, 0.4400,
    -0.6160, 1.0000, 0.4400,
    -0.6160, 1.0000, 0.4400,
    -0.6160, 1.0000, 0.4400,
    -1.2953, 0.4400, 0.7196,
    -1.2953, 0.4400, 0.7196,
    -1.2953, 0.4400, 0.7196,
    -1.2953, 0.4400, 0.7196,
    -1.2953, 0.7196, 0.4400,
    -1.2953, 0.7196, 0.4400,
    -1.2953, 0.7196, 0.4400,
    -1.2953, 0.7196, 0.4400,
    -1.1935, 0.7078, 0.7078,
    -1.1935, 0.7078, 0.7078,
    -1.1935, 0.7078, 0.7078,
    -1.1935, 0.7078, 0.7078,
    -0.6160, 0.7196, 0.9252,
    -0.6160, 0.7196, 0.9252,
    -0.6160, 0.7196, 0.9252,
    -0.6160, 0.7196, 0.9252,
    -1.0075, 0.4400, 0.9252,
    -1.0075, 0.4400, 0.9252,
    -1.0075, 0.4400, 0.9252,
    -1.0075, 0.4400, 0.9252,
    -0.9909, 0.7078, 0.8525,
    -0.9909, 0.7078, 0.8525,
    -0.9909, 0.7078, 0.8525,
    -0.9909, 0.7078, 0.8525,
    -1.0075, 0.9252, 0.4400,
    -1.0075, 0.9252, 0.4400,
    -1.0075, 0.9252, 0.4400,
    -1.0075, 0.9252, 0.4400,
    -0.6160, 0.9252, 0.7196,
    -0.6160, 0.9252, 0.7196,
    -0.6160, 0.9252, 0.7196,
    -0.6160, 0.9252, 0.7196,
    -0.9909, 0.8525, 0.7078,
    -0.9909, 0.8525, 0.7078,
    -0.9909, 0.8525, 0.7078,
    -0.9909, 0.8525, 0.7078,
    -0.6160, -1.0000, 0.4400,
    -0.6160, -1.0000, 0.4400,
    -0.6160, -1.0000, 0.4400,
    -0.6160, -1.0000, 0.4400,
    -0.6160, -0.4400, 1.0000,
    -0.6160, -0.4400, 1.0000,
    -0.6160, -0.4400, 1.0000,
    -0.6160, -0.4400, 1.0000,
    -1.4000, -0.4400, 0.4400,
    -1.4000, -0.4400, 0.4400,
    -1.4000, -0.4400, 0.4400,
    -1.4000, -0.4400, 0.4400,
    -0.6160, -0.9252, 0.7196,
    -0.6160, -0.9252, 0.7196,
    -0.6160, -0.9252, 0.7196,
    -0.6160, -0.9252, 0.7196,
    -1.0075, -0.9252, 0.4400,
    -1.0075, -0.9252, 0.4400,
    -1.0075, -0.9252, 0.4400,
    -1.0075, -0.9252, 0.4400,
    -0.9909, -0.8525, 0.7078,
    -0.9909, -0.8525, 0.7078,
    -0.9909, -0.8525, 0.7078,
    -0.9909, -0.8525, 0.7078,
    -1.0075, -0.4400, 0.9252,
    -1.0075, -0.4400, 0.9252,
    -1.0075, -0.4400, 0.9252,
    -1.0075, -0.4400, 0.9252,
    -0.6160, -0.7196, 0.9252,
    -0.6160, -0.7196, 0.9252,
    -0.6160, -0.7196, 0.9252,
    -0.6160, -0.7196, 0.9252,
    -0.9909, -0.7078, 0.8525,
    -0.9909, -0.7078, 0.8525,
    -0.9909, -0.7078, 0.8525,
    -0.9909, -0.7078, 0.8525,
    -1.2953, -0.7196, 0.4400,
    -1.2953, -0.7196, 0.4400,
    -1.2953, -0.7196, 0.4400,
    -1.2953, -0.7196, 0.4400,
    -1.2953, -0.4400, 0.7196,
    -1.2953, -0.4400, 0.7196,
    -1.2953, -0.4400, 0.7196,
    -1.2953, -0.4400, 0.7196,
    -1.1935, -0.7078, 0.7078,
    -1.1935, -0.7078, 0.7078,
    -1.1935, -0.7078, 0.7078,
    -1.1935, -0.7078, 0.7078
]);

// prettier-ignore
let normal_arr = Float32Array.from([
    0.0000, 0.0000, -1.0000,
    0.0000, 0.2585, -0.9660,
    0.1863, 0.2608, -0.9472,
    0.1877, 0.0000, -0.9822,
    0.0000, 0.9660, -0.2585,
    0.0000, 1.0000, 0.0000,
    0.1863, 0.9472, -0.2608,
    0.1877, 0.9822, 0.0000,
    0.8780, 0.3385, -0.3385,
    0.9365, 0.0000, -0.3508,
    0.9365, 0.3508, 0.0000,
    1.0000, 0.0000, 0.0000,
    0.0000, 0.2585, -0.9660,
    0.0000, 0.7071, -0.7071,
    0.1574, 0.6983, -0.6983,
    0.1863, 0.2608, -0.9472,
    0.1863, 0.2608, -0.9472,
    0.1877, 0.0000, -0.9822,
    0.5630, 0.2487, -0.7882,
    0.5812, 0.0000, -0.8137,
    0.1574, 0.6983, -0.6983,
    0.1863, 0.2608, -0.9472,
    0.4508, 0.6312, -0.6312,
    0.5630, 0.2487, -0.7882,
    0.1863, 0.9472, -0.2608,
    0.1877, 0.9822, 0.0000,
    0.5630, 0.7882, -0.2487,
    0.5812, 0.8137, 0.0000,
    0.0000, 0.7071, -0.7071,
    0.0000, 0.9660, -0.2585,
    0.1574, 0.6983, -0.6983,
    0.1863, 0.9472, -0.2608,
    0.1574, 0.6983, -0.6983,
    0.1863, 0.9472, -0.2608,
    0.4508, 0.6312, -0.6312,
    0.5630, 0.7882, -0.2487,
    0.5630, 0.2487, -0.7882,
    0.5812, 0.0000, -0.8137,
    0.8780, 0.3385, -0.3385,
    0.9365, 0.0000, -0.3508,
    0.5630, 0.7882, -0.2487,
    0.5812, 0.8137, 0.0000,
    0.8780, 0.3385, -0.3385,
    0.9365, 0.3508, 0.0000,
    0.4508, 0.6312, -0.6312,
    0.5630, 0.7882, -0.2487,
    0.5630, 0.2487, -0.7882,
    0.8780, 0.3385, -0.3385,
    0.0000, -1.0000, 0.0000,
    0.0000, -0.9660, -0.2585,
    0.1863, -0.9472, -0.2608,
    0.1877, -0.9822, 0.0000,
    0.0000, -0.2585, -0.9660,
    0.0000, 0.0000, -1.0000,
    0.1863, -0.2608, -0.9472,
    0.1877, 0.0000, -0.9822,
    0.8780, -0.3385, -0.3385,
    0.9365, 0.0000, -0.3508,
    0.9365, -0.3508, 0.0000,
    1.0000, 0.0000, 0.0000,
    0.0000, -0.9660, -0.2585,
    0.0000, -0.7071, -0.7071,
    0.1574, -0.6983, -0.6983,
    0.1863, -0.9472, -0.2608,
    0.1863, -0.9472, -0.2608,
    0.1877, -0.9822, 0.0000,
    0.5630, -0.7882, -0.2487,
    0.5812, -0.8137, 0.0000,
    0.1574, -0.6983, -0.6983,
    0.1863, -0.9472, -0.2608,
    0.4508, -0.6312, -0.6312,
    0.5630, -0.7882, -0.2487,
    0.1863, -0.2608, -0.9472,
    0.1877, 0.0000, -0.9822,
    0.5630, -0.2487, -0.7882,
    0.5812, 0.0000, -0.8137,
    0.0000, -0.7071, -0.7071,
    0.0000, -0.2585, -0.9660,
    0.1574, -0.6983, -0.6983,
    0.1863, -0.2608, -0.9472,
    0.1574, -0.6983, -0.6983,
    0.1863, -0.2608, -0.9472,
    0.4508, -0.6312, -0.6312,
    0.5630, -0.2487, -0.7882,
    0.5630, -0.7882, -0.2487,
    0.5812, -0.8137, 0.0000,
    0.8780, -0.3385, -0.3385,
    0.9365, -0.3508, 0.0000,
    0.5630, -0.2487, -0.7882,
    0.5812, 0.0000, -0.8137,
    0.8780, -0.3385, -0.3385,
    0.9365, 0.0000, -0.3508,
    0.4508, -0.6312, -0.6312,
    0.5630, -0.7882, -0.2487,
    0.5630, -0.2487, -0.7882,
    0.8780, -0.3385, -0.3385,
    0.8780, 0.3385, 0.3385,
    0.9365, 0.0000, 0.3508,
    0.9365, 0.3508, 0.0000,
    1.0000, 0.0000, 0.0000,
    0.0000, 0.9660, 0.2585,
    0.0000, 1.0000, 0.0000,
    0.1863, 0.9472, 0.2608,
    0.1877, 0.9822, 0.0000,
    0.0000, 0.0000, 1.0000,
    0.0000, 0.2585, 0.9660,
    0.1863, 0.2608, 0.9472,
    0.1877, 0.0000, 0.9822,
    0.5630, 0.7882, 0.2487,
    0.5812, 0.8137, 0.0000,
    0.8780, 0.3385, 0.3385,
    0.9365, 0.3508, 0.0000,
    0.5630, 0.2487, 0.7882,
    0.5812, 0.0000, 0.8137,
    0.8780, 0.3385, 0.3385,
    0.9365, 0.0000, 0.3508,
    0.4508, 0.6312, 0.6312,
    0.5630, 0.7882, 0.2487,
    0.5630, 0.2487, 0.7882,
    0.8780, 0.3385, 0.3385,
    0.0000, 0.7071, 0.7071,
    0.0000, 0.9660, 0.2585,
    0.1574, 0.6983, 0.6983,
    0.1863, 0.9472, 0.2608,
    0.1863, 0.9472, 0.2608,
    0.1877, 0.9822, 0.0000,
    0.5630, 0.7882, 0.2487,
    0.5812, 0.8137, 0.0000,
    0.1574, 0.6983, 0.6983,
    0.1863, 0.9472, 0.2608,
    0.4508, 0.6312, 0.6312,
    0.5630, 0.7882, 0.2487,
    0.1863, 0.2608, 0.9472,
    0.1877, 0.0000, 0.9822,
    0.5630, 0.2487, 0.7882,
    0.5812, 0.0000, 0.8137,
    0.0000, 0.2585, 0.9660,
    0.0000, 0.7071, 0.7071,
    0.1574, 0.6983, 0.6983,
    0.1863, 0.2608, 0.9472,
    0.1574, 0.6983, 0.6983,
    0.1863, 0.2608, 0.9472,
    0.4508, 0.6312, 0.6312,
    0.5630, 0.2487, 0.7882,
    0.8780, -0.3385, 0.3385,
    0.9365, 0.0000, 0.3508,
    0.9365, -0.3508, 0.0000,
    1.0000, 0.0000, 0.0000,
    0.0000, -0.2585, 0.9660,
    0.0000, 0.0000, 1.0000,
    0.1863, -0.2608, 0.9472,
    0.1877, 0.0000, 0.9822,
    0.0000, -1.0000, 0.0000,
    0.0000, -0.9660, 0.2585,
    0.1863, -0.9472, 0.2608,
    0.1877, -0.9822, 0.0000,
    0.5630, -0.2487, 0.7882,
    0.5812, 0.0000, 0.8137,
    0.8780, -0.3385, 0.3385,
    0.9365, 0.0000, 0.3508,
    0.5630, -0.7882, 0.2487,
    0.5812, -0.8137, 0.0000,
    0.8780, -0.3385, 0.3385,
    0.9365, -0.3508, 0.0000,
    0.4508, -0.6312, 0.6312,
    0.5630, -0.7882, 0.2487,
    0.5630, -0.2487, 0.7882,
    0.8780, -0.3385, 0.3385,
    0.0000, -0.7071, 0.7071,
    0.0000, -0.2585, 0.9660,
    0.1574, -0.6983, 0.6983,
    0.1863, -0.2608, 0.9472,
    0.1863, -0.2608, 0.9472,
    0.1877, 0.0000, 0.9822,
    0.5630, -0.2487, 0.7882,
    0.5812, 0.0000, 0.8137,
    0.1574, -0.6983, 0.6983,
    0.1863, -0.2608, 0.9472,
    0.4508, -0.6312, 0.6312,
    0.5630, -0.2487, 0.7882,
    0.1863, -0.9472, 0.2608,
    0.1877, -0.9822, 0.0000,
    0.5630, -0.7882, 0.2487,
    0.5812, -0.8137, 0.0000,
    0.0000, -0.9660, 0.2585,
    0.0000, -0.7071, 0.7071,
    0.1574, -0.6983, 0.6983,
    0.1863, -0.9472, 0.2608,
    0.1574, -0.6983, 0.6983,
    0.1863, -0.9472, 0.2608,
    0.4508, -0.6312, 0.6312,
    0.5630, -0.7882, 0.2487,
    -0.1877, 0.0000, -0.9822,
    -0.1863, 0.2608, -0.9472,
    0.0000, 0.0000, -1.0000,
    0.0000, 0.2585, -0.9660,
    -1.0000, 0.0000, 0.0000,
    -0.9365, 0.3508, 0.0000,
    -0.9365, 0.0000, -0.3508,
    -0.8780, 0.3385, -0.3385,
    -0.1877, 0.9822, 0.0000,
    -0.1863, 0.9472, -0.2608,
    0.0000, 0.9660, -0.2585,
    0.0000, 1.0000, 0.0000,
    -0.5812, 0.0000, -0.8137,
    -0.5630, 0.2487, -0.7882,
    -0.1877, 0.0000, -0.9822,
    -0.1863, 0.2608, -0.9472,
    -0.1863, 0.2608, -0.9472,
    -0.1574, 0.6983, -0.6983,
    0.0000, 0.2585, -0.9660,
    0.0000, 0.7071, -0.7071,
    -0.5630, 0.2487, -0.7882,
    -0.4508, 0.6312, -0.6312,
    -0.1863, 0.2608, -0.9472,
    -0.1574, 0.6983, -0.6983,
    -0.9365, 0.3508, 0.0000,
    -0.8780, 0.3385, -0.3385,
    -0.5812, 0.8137, 0.0000,
    -0.5630, 0.7882, -0.2487,
    -0.9365, 0.0000, -0.3508,
    -0.8780, 0.3385, -0.3385,
    -0.5812, 0.0000, -0.8137,
    -0.5630, 0.2487, -0.7882,
    -0.8780, 0.3385, -0.3385,
    -0.5630, 0.2487, -0.7882,
    -0.5630, 0.7882, -0.2487,
    -0.4508, 0.6312, -0.6312,
    -0.1863, 0.9472, -0.2608,
    -0.1574, 0.6983, -0.6983,
    0.0000, 0.7071, -0.7071,
    0.0000, 0.9660, -0.2585,
    -0.5812, 0.8137, 0.0000,
    -0.5630, 0.7882, -0.2487,
    -0.1877, 0.9822, 0.0000,
    -0.1863, 0.9472, -0.2608,
    -0.5630, 0.7882, -0.2487,
    -0.4508, 0.6312, -0.6312,
    -0.1863, 0.9472, -0.2608,
    -0.1574, 0.6983, -0.6983,
    -1.0000, 0.0000, 0.0000,
    -0.9365, -0.3508, 0.0000,
    -0.9365, 0.0000, -0.3508,
    -0.8780, -0.3385, -0.3385,
    -0.1877, 0.0000, -0.9822,
    -0.1863, -0.2608, -0.9472,
    0.0000, -0.2585, -0.9660,
    0.0000, 0.0000, -1.0000,
    -0.1877, -0.9822, 0.0000,
    -0.1863, -0.9472, -0.2608,
    0.0000, -1.0000, 0.0000,
    0.0000, -0.9660, -0.2585,
    -0.9365, 0.0000, -0.3508,
    -0.8780, -0.3385, -0.3385,
    -0.5812, 0.0000, -0.8137,
    -0.5630, -0.2487, -0.7882,
    -0.9365, -0.3508, 0.0000,
    -0.8780, -0.3385, -0.3385,
    -0.5812, -0.8137, 0.0000,
    -0.5630, -0.7882, -0.2487,
    -0.8780, -0.3385, -0.3385,
    -0.5630, -0.2487, -0.7882,
    -0.5630, -0.7882, -0.2487,
    -0.4508, -0.6312, -0.6312,
    -0.1863, -0.2608, -0.9472,
    -0.1574, -0.6983, -0.6983,
    0.0000, -0.7071, -0.7071,
    0.0000, -0.2585, -0.9660,
    -0.5812, 0.0000, -0.8137,
    -0.5630, -0.2487, -0.7882,
    -0.1877, 0.0000, -0.9822,
    -0.1863, -0.2608, -0.9472,
    -0.5630, -0.2487, -0.7882,
    -0.4508, -0.6312, -0.6312,
    -0.1863, -0.2608, -0.9472,
    -0.1574, -0.6983, -0.6983,
    -0.5812, -0.8137, 0.0000,
    -0.5630, -0.7882, -0.2487,
    -0.1877, -0.9822, 0.0000,
    -0.1863, -0.9472, -0.2608,
    -0.1863, -0.9472, -0.2608,
    -0.1574, -0.6983, -0.6983,
    0.0000, -0.9660, -0.2585,
    0.0000, -0.7071, -0.7071,
    -0.5630, -0.7882, -0.2487,
    -0.4508, -0.6312, -0.6312,
    -0.1863, -0.9472, -0.2608,
    -0.1574, -0.6983, -0.6983,
    -1.0000, 0.0000, 0.0000,
    -0.9365, 0.3508, 0.0000,
    -0.9365, 0.0000, 0.3508,
    -0.8780, 0.3385, 0.3385,
    -0.1877, 0.0000, 0.9822,
    -0.1863, 0.2608, 0.9472,
    0.0000, 0.0000, 1.0000,
    0.0000, 0.2585, 0.9660,
    -0.1877, 0.9822, 0.0000,
    -0.1863, 0.9472, 0.2608,
    0.0000, 0.9660, 0.2585,
    0.0000, 1.0000, 0.0000,
    -0.9365, 0.0000, 0.3508,
    -0.8780, 0.3385, 0.3385,
    -0.5812, 0.0000, 0.8137,
    -0.5630, 0.2487, 0.7882,
    -0.9365, 0.3508, 0.0000,
    -0.8780, 0.3385, 0.3385,
    -0.5812, 0.8137, 0.0000,
    -0.5630, 0.7882, 0.2487,
    -0.8780, 0.3385, 0.3385,
    -0.5630, 0.2487, 0.7882,
    -0.5630, 0.7882, 0.2487,
    -0.4508, 0.6312, 0.6312,
    -0.1863, 0.2608, 0.9472,
    -0.1574, 0.6983, 0.6983,
    0.0000, 0.2585, 0.9660,
    0.0000, 0.7071, 0.7071,
    -0.5812, 0.0000, 0.8137,
    -0.5630, 0.2487, 0.7882,
    -0.1877, 0.0000, 0.9822,
    -0.1863, 0.2608, 0.9472,
    -0.5630, 0.2487, 0.7882,
    -0.4508, 0.6312, 0.6312,
    -0.1863, 0.2608, 0.9472,
    -0.1574, 0.6983, 0.6983,
    -0.5812, 0.8137, 0.0000,
    -0.5630, 0.7882, 0.2487,
    -0.1877, 0.9822, 0.0000,
    -0.1863, 0.9472, 0.2608,
    -0.1863, 0.9472, 0.2608,
    -0.1574, 0.6983, 0.6983,
    0.0000, 0.7071, 0.7071,
    0.0000, 0.9660, 0.2585,
    -0.5630, 0.7882, 0.2487,
    -0.4508, 0.6312, 0.6312,
    -0.1863, 0.9472, 0.2608,
    -0.1574, 0.6983, 0.6983,
    -0.1877, -0.9822, 0.0000,
    -0.1863, -0.9472, 0.2608,
    0.0000, -1.0000, 0.0000,
    0.0000, -0.9660, 0.2585,
    -0.1877, 0.0000, 0.9822,
    -0.1863, -0.2608, 0.9472,
    0.0000, -0.2585, 0.9660,
    0.0000, 0.0000, 1.0000,
    -1.0000, 0.0000, 0.0000,
    -0.9365, -0.3508, 0.0000,
    -0.9365, 0.0000, 0.3508,
    -0.8780, -0.3385, 0.3385,
    -0.1863, -0.9472, 0.2608,
    -0.1574, -0.6983, 0.6983,
    0.0000, -0.9660, 0.2585,
    0.0000, -0.7071, 0.7071,
    -0.5812, -0.8137, 0.0000,
    -0.5630, -0.7882, 0.2487,
    -0.1877, -0.9822, 0.0000,
    -0.1863, -0.9472, 0.2608,
    -0.5630, -0.7882, 0.2487,
    -0.4508, -0.6312, 0.6312,
    -0.1863, -0.9472, 0.2608,
    -0.1574, -0.6983, 0.6983,
    -0.5812, 0.0000, 0.8137,
    -0.5630, -0.2487, 0.7882,
    -0.1877, 0.0000, 0.9822,
    -0.1863, -0.2608, 0.9472,
    -0.1863, -0.2608, 0.9472,
    -0.1574, -0.6983, 0.6983,
    0.0000, -0.7071, 0.7071,
    0.0000, -0.2585, 0.9660,
    -0.5630, -0.2487, 0.7882,
    -0.4508, -0.6312, 0.6312,
    -0.1863, -0.2608, 0.9472,
    -0.1574, -0.6983, 0.6983,
    -0.9365, -0.3508, 0.0000,
    -0.8780, -0.3385, 0.3385,
    -0.5812, -0.8137, 0.0000,
    -0.5630, -0.7882, 0.2487,
    -0.9365, 0.0000, 0.3508,
    -0.8780, -0.3385, 0.3385,
    -0.5812, 0.0000, 0.8137,
    -0.5630, -0.2487, 0.7882,
    -0.8780, -0.3385, 0.3385,
    -0.5630, -0.2487, 0.7882,
    -0.5630, -0.7882, 0.2487,
    -0.4508, -0.6312, 0.6312
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.5550, 0.5700,
    0.5550, 0.5700,
    0.5550, 0.5700,
    0.5550, 0.5700,
    0.6950, 0.4300,
    0.6950, 0.4300,
    0.6950, 0.4300,
    0.6950, 0.4300,
    0.5550, 0.4300,
    0.5550, 0.4300,
    0.5550, 0.4300,
    0.5550, 0.4300,
    0.5900, 0.5700,
    0.5900, 0.5700,
    0.5900, 0.5700,
    0.5900, 0.5700,
    0.5550, 0.5350,
    0.5550, 0.5350,
    0.5550, 0.5000,
    0.5550, 0.5350,
    0.5885, 0.5365,
    0.5885, 0.5365,
    0.5885, 0.5365,
    0.5885, 0.5000,
    0.6600, 0.4300,
    0.6600, 0.4300,
    0.6600, 0.4300,
    0.6600, 0.4300,
    0.6250, 0.5700,
    0.6950, 0.4650,
    0.6250, 0.5700,
    0.6950, 0.4650,
    0.6250, 0.5365,
    0.6615, 0.4635,
    0.6250, 0.5365,
    0.6615, 0.4635,
    0.5550, 0.4650,
    0.5550, 0.4650,
    0.5550, 0.4650,
    0.5550, 0.4650,
    0.6250, 0.4300,
    0.5900, 0.4300,
    0.5900, 0.4300,
    0.5900, 0.4300,
    0.5885, 0.5000,
    0.6250, 0.4635,
    0.5885, 0.4635,
    0.5885, 0.4635,
    0.3050, 0.4300,
    0.3050, 0.4300,
    0.3050, 0.4300,
    0.3050, 0.4300,
    0.4450, 0.5700,
    0.4450, 0.5700,
    0.4450, 0.5700,
    0.4450, 0.5700,
    0.4450, 0.4300,
    0.4450, 0.4300,
    0.4450, 0.4300,
    0.4450, 0.4300,
    0.3050, 0.4650,
    0.3050, 0.4650,
    0.3050, 0.4650,
    0.3050, 0.4650,
    0.3400, 0.4300,
    0.3400, 0.4300,
    0.3750, 0.4300,
    0.3400, 0.4300,
    0.3385, 0.4635,
    0.3385, 0.4635,
    0.3385, 0.4635,
    0.3750, 0.4635,
    0.4450, 0.5350,
    0.4450, 0.5350,
    0.4450, 0.5350,
    0.4450, 0.5350,
    0.3050, 0.5000,
    0.4100, 0.5700,
    0.3050, 0.5000,
    0.4100, 0.5700,
    0.3385, 0.5000,
    0.4115, 0.5365,
    0.3385, 0.5000,
    0.4115, 0.5365,
    0.4100, 0.4300,
    0.4100, 0.4300,
    0.4100, 0.4300,
    0.4100, 0.4300,
    0.4450, 0.5000,
    0.4450, 0.4650,
    0.4450, 0.4650,
    0.4450, 0.4650,
    0.3750, 0.4635,
    0.4115, 0.4635,
    0.4115, 0.5000,
    0.4115, 0.4635,
    0.5550, 0.3200,
    0.5550, 0.3200,
    0.5550, 0.3200,
    0.5550, 0.3200,
    0.6950, 0.3200,
    0.6950, 0.3200,
    0.6950, 0.3200,
    0.6950, 0.3200,
    0.5550, 0.1800,
    0.5550, 0.1800,
    0.5550, 0.1800,
    0.5550, 0.1800,
    0.5900, 0.3200,
    0.5900, 0.3200,
    0.5900, 0.3200,
    0.5900, 0.3200,
    0.5550, 0.2500,
    0.5550, 0.2850,
    0.5550, 0.2850,
    0.5550, 0.2850,
    0.5885, 0.2865,
    0.5885, 0.2865,
    0.5885, 0.2500,
    0.5885, 0.2865,
    0.6250, 0.1800,
    0.6950, 0.2850,
    0.6156, 0.1800,
    0.6950, 0.2850,
    0.6600, 0.3200,
    0.6600, 0.3200,
    0.6250, 0.3200,
    0.6600, 0.3200,
    0.6066, 0.2135,
    0.6615, 0.2865,
    0.6250, 0.2865,
    0.6250, 0.2865,
    0.5550, 0.2150,
    0.5550, 0.2150,
    0.5550, 0.2150,
    0.5550, 0.2150,
    0.5900, 0.1800,
    0.5900, 0.1800,
    0.6250, 0.1800,
    0.5900, 0.1800,
    0.6250, 0.2135,
    0.5885, 0.2135,
    0.5885, 0.2500,
    0.5885, 0.2135,
    0.4450, 0.3200,
    0.4450, 0.3200,
    0.4450, 0.3200,
    0.4450, 0.3200,
    0.4450, 0.1800,
    0.4450, 0.1800,
    0.4450, 0.1800,
    0.4450, 0.1800,
    0.3050, 0.3200,
    0.3050, 0.3200,
    0.3050, 0.3200,
    0.3050, 0.3200,
    0.4450, 0.2850,
    0.4450, 0.2850,
    0.4450, 0.2850,
    0.4450, 0.2850,
    0.3750, 0.3200,
    0.4100, 0.3200,
    0.4100, 0.3200,
    0.4100, 0.3200,
    0.4115, 0.2316,
    0.3750, 0.2865,
    0.4115, 0.2865,
    0.4115, 0.2865,
    0.3050, 0.2500,
    0.4100, 0.1800,
    0.3050, 0.2594,
    0.4100, 0.1800,
    0.4450, 0.2150,
    0.4450, 0.2150,
    0.4450, 0.2500,
    0.4450, 0.2150,
    0.3385, 0.2684,
    0.4115, 0.2135,
    0.3750, 0.2135,
    0.4115, 0.2500,
    0.3400, 0.3200,
    0.3400, 0.3200,
    0.3400, 0.3200,
    0.3400, 0.3200,
    0.3050, 0.2850,
    0.3050, 0.2850,
    0.3050, 0.2500,
    0.3050, 0.2850,
    0.3385, 0.2500,
    0.3385, 0.2865,
    0.3750, 0.2135,
    0.3385, 0.2865,
    0.5550, 0.6800,
    0.5550, 0.6800,
    0.5550, 0.6800,
    0.5550, 0.6800,
    0.5550, 0.8200,
    0.5550, 0.8200,
    0.5550, 0.8200,
    0.5550, 0.8200,
    0.8050, 0.4300,
    0.8050, 0.4300,
    0.8050, 0.4300,
    0.8050, 0.4300,
    0.5550, 0.7150,
    0.5550, 0.7150,
    0.5550, 0.7150,
    0.5550, 0.7150,
    0.5900, 0.6800,
    0.6250, 0.6800,
    0.5900, 0.6800,
    0.5900, 0.6800,
    0.5885, 0.7135,
    0.5885, 0.7684,
    0.5885, 0.7135,
    0.6250, 0.7135,
    0.5900, 0.8200,
    0.5900, 0.8200,
    0.5900, 0.8200,
    0.5900, 0.8200,
    0.5550, 0.7850,
    0.5550, 0.7850,
    0.5550, 0.7850,
    0.5550, 0.7500,
    0.5885, 0.7865,
    0.5885, 0.7500,
    0.5885, 0.7865,
    0.5885, 0.7500,
    0.8050, 0.4650,
    0.6156, 0.6800,
    0.6250, 0.6800,
    0.8050, 0.4650,
    0.6250, 0.8200,
    0.6250, 0.8200,
    0.8400, 0.4300,
    0.8400, 0.4300,
    0.6250, 0.7865,
    0.6250, 0.7865,
    0.8385, 0.4635,
    0.6066, 0.7135,
    0.4450, 0.8200,
    0.4450, 0.8200,
    0.4450, 0.8200,
    0.4450, 0.8200,
    0.4450, 0.6800,
    0.4450, 0.6800,
    0.4450, 0.6800,
    0.4450, 0.6800,
    0.1950, 0.4300,
    0.1950, 0.4300,
    0.1950, 0.4300,
    0.1950, 0.4300,
    0.4450, 0.7850,
    0.4450, 0.7850,
    0.4450, 0.7850,
    0.4450, 0.7850,
    0.4100, 0.8200,
    0.4100, 0.8200,
    0.1250, 0.4300,
    0.1250, 0.4300,
    0.4115, 0.7865,
    0.4115, 0.7865,
    0.1250, 0.4635,
    0.4115, 0.7865,
    0.4100, 0.6800,
    0.1950, 0.4906,
    0.1950, 0.5000,
    0.4100, 0.6800,
    0.4450, 0.7150,
    0.4450, 0.7500,
    0.4450, 0.7150,
    0.4450, 0.7150,
    0.4115, 0.7500,
    0.4115, 0.7500,
    0.4115, 0.7135,
    0.1615, 0.4816,
    0.1600, 0.4300,
    0.1600, 0.4300,
    0.1600, 0.4300,
    0.1600, 0.4300,
    0.1950, 0.4650,
    0.1950, 0.5000,
    0.1950, 0.4650,
    0.1950, 0.4650,
    0.1615, 0.4635,
    0.3750, 0.7865,
    0.1615, 0.4635,
    0.1615, 0.5000,
    0.5550, 0.9300,
    0.5550, 0.9300,
    0.5550, 0.9300,
    0.5550, 0.9300,
    0.5550, 0.0700,
    0.5550, 0.0700,
    0.5550, 0.0700,
    0.5550, 0.0700,
    0.8050, 0.3200,
    0.8050, 0.3200,
    0.8050, 0.3200,
    0.8050, 0.3200,
    0.5550, 0.9650,
    0.5550, 0.9650,
    0.5550, 0.9650,
    0.5550, 0.9650,
    0.5900, 0.9300,
    0.5900, 0.9300,
    0.5900, 0.9300,
    0.6250, 0.9300,
    0.5885, 0.9635,
    0.5885, 0.9635,
    0.6250, 0.9635,
    0.5885, 0.9635,
    0.5900, 0.0700,
    0.5900, 0.0700,
    0.5900, 0.0700,
    0.5900, 0.0700,
    0.5550, 1.0000,
    0.5550, 1.0000,
    0.5550, 0.0350,
    0.5550, 0.0350,
    0.5885, 1.0000,
    0.5885, 1.0000,
    0.5885, 0.0365,
    0.5885, 0.0365,
    0.6250, 0.9300,
    0.6156, 0.9300,
    0.8400, 0.3200,
    0.8400, 0.3200,
    0.8050, 0.2850,
    0.6250, 0.0700,
    0.6250, 0.0700,
    0.8050, 0.2850,
    0.6066, 0.9635,
    0.6250, 0.9635,
    0.8385, 0.2865,
    0.6250, 0.0365,
    0.1950, 0.3200,
    0.1950, 0.3200,
    0.1950, 0.3200,
    0.1950, 0.3200,
    0.4450, 0.0700,
    0.4450, 0.0700,
    0.4450, 0.0700,
    0.4450, 0.0700,
    0.4450, 0.9300,
    0.4450, 0.9300,
    0.4450, 0.9300,
    0.4450, 0.9300,
    0.1950, 0.2850,
    0.1950, 0.2850,
    0.1950, 0.2850,
    0.1950, 0.2850,
    0.1600, 0.3200,
    0.1250, 0.3200,
    0.1600, 0.3200,
    0.1600, 0.3200,
    0.1250, 0.2865,
    0.1615, 0.2865,
    0.1615, 0.2865,
    0.1615, 0.2865,
    0.4450, 1.0000,
    0.4450, 0.9906,
    0.4450, 0.0350,
    0.4450, 0.0350,
    0.4100, 0.0700,
    0.1950, 0.2500,
    0.1950, 0.2500,
    0.4100, 0.0700,
    0.4115, 0.9816,
    0.1615, 0.2500,
    0.4115, 0.0365,
    0.1615, 0.2500,
    0.4100, 0.9300,
    0.4100, 0.9300,
    0.1250, 0.3200,
    0.1344, 0.3200,
    0.4450, 0.9650,
    0.4450, 0.9650,
    0.4450, 0.9650,
    0.4450, 1.0000,
    0.4115, 0.9635,
    0.4115, 1.0000,
    0.1434, 0.2865,
    0.1250, 0.2865
]);

// prettier-ignore
let weights_arr = Float32Array.from([]);

// prettier-ignore
let index_arr = Uint16Array.from([
    53, 0, 247,
    0, 194, 247,
    146, 58, 163,
    58, 87, 163,
    161, 85, 183,
    85, 67, 183,
    181, 65, 155,
    65, 51, 155,
    195, 1, 210,
    1, 12, 210,
    211, 13, 230,
    13, 28, 230,
    231, 29, 202,
    29, 4, 202,
    289, 197, 304,
    197, 216, 304,
    306, 218, 324,
    218, 232, 324,
    326, 234, 296,
    234, 200, 296,
    342, 148, 367,
    148, 169, 367,
    366, 168, 351,
    168, 185, 351,
    350, 184, 339,
    184, 153, 339,
    10, 98, 43,
    98, 111, 43,
    41, 109, 27,
    109, 127, 27,
    25, 125, 7,
    125, 103, 7,
    105, 295, 136,
    295, 314, 136,
    137, 315, 120,
    315, 330, 120,
    121, 331, 100,
    331, 298, 100,
    198, 242, 220,
    242, 252, 220,
    222, 254, 204,
    254, 268, 204,
    206, 270, 192,
    270, 244, 192,
    97, 145, 115,
    145, 159, 115,
    113, 157, 135,
    157, 175, 135,
    133, 173, 107,
    173, 151, 107,
    346, 290, 376,
    290, 300, 376,
    378, 302, 360,
    302, 316, 360,
    362, 318, 340,
    318, 292, 340,
    3, 55, 17,
    55, 73, 17,
    19, 75, 37,
    75, 89, 37,
    39, 91, 9,
    91, 57, 9,
    52, 246, 77,
    246, 267, 77,
    76, 266, 61,
    266, 283, 61,
    60, 282, 49,
    282, 251, 49,
    241, 345, 256,
    345, 372, 256,
    258, 374, 276,
    374, 352, 276,
    278, 354, 248,
    354, 336, 248,
    383, 369, 357,
    382, 356, 375,
    356, 353, 375,
    377, 380, 347,
    380, 373, 347,
    368, 381, 361,
    381, 379, 361,
    364, 370, 341,
    370, 363, 341,
    359, 371, 349,
    371, 365, 349,
    355, 358, 337,
    358, 348, 337,
    333, 321, 311,
    332, 310, 325,
    310, 307, 325,
    328, 334, 297,
    334, 327, 297,
    323, 335, 313,
    335, 329, 313,
    319, 322, 293,
    322, 312, 293,
    309, 320, 303,
    320, 317, 303,
    305, 308, 291,
    308, 301, 291,
    285, 273, 263,
    284, 262, 277,
    262, 259, 277,
    280, 286, 249,
    286, 279, 249,
    275, 287, 265,
    287, 281, 265,
    271, 274, 245,
    274, 264, 245,
    261, 272, 255,
    272, 269, 255,
    257, 260, 243,
    260, 253, 243,
    237, 227, 213,
    239, 215, 229,
    215, 209, 229,
    235, 238, 201,
    238, 228, 201,
    226, 236, 219,
    236, 233, 219,
    221, 224, 199,
    224, 217, 199,
    212, 225, 205,
    225, 223, 205,
    208, 214, 193,
    214, 207, 193,
    190, 178, 164,
    191, 165, 182,
    165, 160, 182,
    187, 189, 154,
    189, 180, 154,
    176, 188, 170,
    188, 186, 170,
    172, 177, 150,
    177, 171, 150,
    166, 179, 156,
    179, 174, 156,
    162, 167, 144,
    167, 158, 144,
    142, 130, 116,
    143, 118, 134,
    118, 112, 134,
    139, 141, 106,
    141, 132, 106,
    128, 140, 122,
    140, 138, 122,
    124, 129, 102,
    129, 123, 102,
    117, 131, 108,
    131, 126, 108,
    114, 119, 96,
    119, 110, 96,
    92, 82, 70,
    93, 71, 84,
    71, 66, 84,
    90, 95, 56,
    95, 86, 56,
    83, 94, 74,
    94, 88, 74,
    79, 81, 54,
    81, 72, 54,
    68, 80, 62,
    80, 78, 62,
    64, 69, 50,
    69, 63, 50,
    44, 34, 22,
    46, 23, 36,
    23, 18, 36,
    42, 47, 8,
    47, 38, 8,
    35, 45, 26,
    45, 40, 26,
    31, 33, 6,
    33, 24, 6,
    20, 32, 14,
    32, 30, 14,
    16, 21, 2,
    21, 15, 2,
    147, 99, 59,
    99, 11, 59,
    101, 299, 5,
    299, 203, 5,
    343, 294, 149,
    294, 104, 149,
    240, 196, 344,
    196, 288, 344,
    338, 152, 250,
    152, 48, 250
]);
