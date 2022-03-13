/**
MIT License

Copyright (c) 2020 Deon Trevor Mpofu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/


export default function Page404() {
    return (
        <div className="container text-center">
            <div className="d-flex flex-column align-items-center">
                <h1 className="fw-bolder">
                    Error 404 - Page Not Found!
                </h1>
                <div className="drawing">
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="ball"></div>
                </div>
                <p>
                    Yey! yey! folk, you are hitting a tangent
                </p>
                <div>
                    <a
                        className="btn btn-outline-dark"
                        href="/"
                    >
                        Go back home
                    </a>
                </div>
            </div>
        </div >
    )
}