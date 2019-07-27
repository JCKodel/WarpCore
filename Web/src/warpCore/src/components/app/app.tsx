import * as m from "mithril";
import "./app.scss";

export class App {
	view() {
		return (
			<div class="wc-app">
				<h1>Google Sans</h1>
				<p>Roboto <b>Bold</b></p>
				<pre>Pre Iosevka</pre>
				<i class="mdi mdi-48px mdi-spin mdi-loading"></i>
				<input></input>
				<h1>Google Sans</h1>
				<p>Roboto <b>Bold</b></p>
				<pre>Pre Iosevka</pre>
				<i class="mdi mdi-48px mdi-spin mdi-loading"></i>
				<h1>Google Sans</h1>
				<p>Roboto <b>Bold</b></p>
				<pre>Pre Iosevka</pre>
				<i class="mdi mdi-48px mdi-spin mdi-loading"></i>
				<h1>Google Sans</h1>
				<p>Roboto <b>Bold</b></p>
				<pre>Pre Iosevka</pre>
				<i class="mdi mdi-48px mdi-spin mdi-loading"></i>
				<h1>Google Sans</h1>
				<p>Roboto <b>Bold</b></p>
				<pre>Pre Iosevka</pre>
				<i class="mdi mdi-48px mdi-spin mdi-loading"></i>
				<h1>Google Sans</h1>
				<p>Roboto <b>Bold</b></p>
				<pre>Pre Iosevka</pre>
				<i class="mdi mdi-48px mdi-spin mdi-loading"></i>
			</div>
		);
	}
}

m.mount(document.body as HTMLElement, App);