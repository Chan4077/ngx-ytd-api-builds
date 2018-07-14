<h1 align="center">ngx-ytd-api</h1>

<p align="center">An unofficial library of integrating Angular with the YouTube Data API</p>

<div align="center">

<!-- Badges -->
[![ngx-ytd-api@latest](https://img.shields.io/npm/v/ngx-ytd-api.svg?style=flat-square)][package-url]
[![ngx-ytd-api@next](https://img.shields.io/npm/v/ngx-ytd-api/next.svg?style=flat-square)][package-url]
[![Build Status](https://img.shields.io/travis/Chan4077/ngx-ytd-api.svg?style=flat-square)](https://travis-ci.org/Chan4077/ngx-ytd-api)
[![GitHub contributors](https://img.shields.io/github/contributors/Chan4077/ngx-ytd-api.svg?style=flat-square)](https://github.com/Chan4077/ngx-ytd-api/graphs/contributors)
[![ngx-ytd-api license](https://img.shields.io/github/license/Chan4077/ngx-ytd-api.svg?style=flat-square)](https://github.com/Chan4077/ngx-ytd-api/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/Chan4077/ngx-ytd-api.svg?style=flat-square)](https://github.com/Chan4077/ngx-ytd-api/commits)
[![Greenkeeper badge](https://badges.greenkeeper.io/Chan4077/ngx-ytd-api.svg?style=flat-square)](https://greenkeeper.io/)


<!-- [![GitHub latest release](https://img.shields.io/github/release/Chan4077/ngx-ytd-api/all.svg?style=flat-square)][package-url] -->

<!-- END Badges -->

</div>

## Getting Started

### Prerequisites
Ensure that you have `npm` and `node` installed and that you have a basic Angular app setup.

Also ensure that your app is running at least Angular 6 before continuing.

### Installing
Run the following comamnd which should install the `latest` version (`1.0.0-alpha.3-9993f44`):

```bash
npm install ngx-ytd-api --save
```

#### Next
To get the latest `next` tag, run the following command:

```bash
npm install ngx-ytd-api@next --save
```

#### Snapshot builds
Alternatively, you can get a snapshot build with the latest changes from `master`. Note that this snapshot build should not be considered stable and may break between releases.

```bash
npm install --save Chan4077/ngx-ytd-api-builds
```

## Features

### Available features

<table>
	<tbody>
		<tr>
			<th>Feature</th>
			<th>Notes</th>
			<th>Docs</th>
		</tr>
		<tr>
			<td>Search</td>
			<td>
				<ul>
					<li>Full API documentation coming soon!</li>
					<li>Most API features are available.</li>
				</ul>
			</td>
			<td>
				<ul>
					<li><a href="https://developers.google.com/youtube/v3/docs/search/list#parameters">API parameters</a></li>
					<li><a href="https://developers.google.com/youtube/v3/docs/search#resource-representation">Resource representation</a></li>
					<li><a href="https://developers.google.com/youtube/v3/docs/search#properties">Properties</a></li>
				</ul>
			</td>
	</tbody>
</table>

### In-progress / planned / non-planned features

Feature | Status | Issue
---|---|---
Activities | Not planned | - 
Captions | Not planned | -
Channel banner / Channel sections / Channels | Not planned | -
Comment threads / Comments | Planned | [#6](https://github.com/Chan4077/ngx-ytd-api/issues/6)
Guide categories | Not planned | -
I18n | Not planned | -
Playlist items / Playlists | Not planned | -
Subscriptions | Not planned | -
Thumbnails | Not planned | -
Video abuse report reasons / Video categories / Videos | Not planned | -
Watermarks | Not planned | -

See [here](https://developers.google.com/youtube/v3/docs) for a list of all endpoints of the YouTube Data API.

[package-url]: https://npmjs.com/package/ngx-ytd-api
