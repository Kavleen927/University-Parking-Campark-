import { c as create_ssr_component, f as createEventDispatcher, o as onDestroy, d as subscribe, b as escape, v as validate_component } from "../../chunks/index-90541925.js";
import { s as session } from "../../chunks/stores-50be4fe9.js";
const Geolocation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { coords = [-1, -1] } = $$props;
  let { position = {} } = $$props;
  let { options = {} } = $$props;
  let { getPosition = false } = $$props;
  let { watch = false } = $$props;
  let { loading = false } = $$props;
  let { success = false } = $$props;
  let { error = false } = $$props;
  let { notSupported = false } = $$props;
  async function watchPosition(opts) {
    notSupported = false;
    loading = true;
    error = false;
    if (!("geolocation" in navigator)) {
      notSupported = true;
    } else {
      if (watcherId)
        await clearWatcher(watcherId);
      watcherId = navigator.geolocation.watchPosition(handlePosition, handleError, opts);
      return watcherId;
    }
  }
  async function getGeolocationPosition(opts) {
    notSupported = false;
    loading = true;
    error = false;
    if (!("geolocation" in navigator)) {
      notSupported = true;
    } else {
      navigator.geolocation.getCurrentPosition(handlePosition, handleError, opts);
    }
  }
  async function clearWatcher(watcherId2) {
    if (!("geolocation" in navigator)) {
      notSupported = true;
    } else {
      navigator.geolocation.clearWatch(watcherId2);
      watcherId2 = void 0;
    }
  }
  const dispatch = createEventDispatcher();
  let watcherId = void 0;
  let lastPosition = void 0;
  function handlePosition(pos) {
    coords = [pos.coords.longitude, pos.coords.latitude];
    position = {
      coords: {
        accuracy: pos.coords.accuracy,
        altitude: pos.coords.altitude,
        altitudeAccuracy: pos.coords.altitudeAccuracy,
        heading: pos.coords.heading,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        speed: pos.coords.speed
      },
      timestamp: pos.timestamp
    };
    if (!lastPosition || lastPosition.coords.latitude !== pos.coords.latitude || lastPosition.coords.longitude !== pos.coords.longitude) {
      lastPosition = pos;
      dispatch("position", position);
    }
    loading = false;
  }
  function handleError(err) {
    dispatch("error", err);
    error = err;
    loading = false;
  }
  onDestroy(() => {
    if (watcherId)
      clearWatcher(watcherId);
  });
  if ($$props.coords === void 0 && $$bindings.coords && coords !== void 0)
    $$bindings.coords(coords);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.getPosition === void 0 && $$bindings.getPosition && getPosition !== void 0)
    $$bindings.getPosition(getPosition);
  if ($$props.watch === void 0 && $$bindings.watch && watch !== void 0)
    $$bindings.watch(watch);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.success === void 0 && $$bindings.success && success !== void 0)
    $$bindings.success(success);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.notSupported === void 0 && $$bindings.notSupported && notSupported !== void 0)
    $$bindings.notSupported(notSupported);
  if ($$props.watchPosition === void 0 && $$bindings.watchPosition && watchPosition !== void 0)
    $$bindings.watchPosition(watchPosition);
  if ($$props.getGeolocationPosition === void 0 && $$bindings.getGeolocationPosition && getGeolocationPosition !== void 0)
    $$bindings.getGeolocationPosition(getGeolocationPosition);
  if ($$props.clearWatcher === void 0 && $$bindings.clearWatcher && clearWatcher !== void 0)
    $$bindings.clearWatcher(clearWatcher);
  {
    if (typeof window !== "undefined" && getPosition && watch)
      watchPosition(options);
  }
  {
    if (typeof window !== "undefined" && getPosition && !watch)
      getGeolocationPosition(options);
  }
  success = getPosition && !loading && !error;
  {
    if ((!getPosition || !watch) && watcherId)
      clearWatcher(watcherId);
  }
  return `${slots.default ? slots.default({
    loading,
    success,
    error,
    notSupported,
    coords
  }) : ``}`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "body.svelte-f1jmza{display:block}div.svelte-f1jmza{display:block;max-width:100% !important;flex:none;margin-left:0%;margin-top:1rem}h1.svelte-f1jmza{@apply font-semibold text-xl;}#content.svelte-f1jmza{text-align:center}button.svelte-f1jmza{@apply rounded-lg max-w-xs bg-pink-600 text-white w-full py-2 mt-2;}",
  map: null
};
const load = async ({ session: session2 }) => {
  if (session2.user.exists)
    return {};
  return { status: 302, redirect: "/login" };
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  let getPosition = false;
  $$result.css.add(css);
  $$unsubscribe_session();
  return `<body class="${"svelte-f1jmza"}"><div class="${"svelte-f1jmza"}"><div id="${"content"}" class="${"svelte-f1jmza"}"><br><br><br>
            <h1 class="${"svelte-f1jmza"}">Welcome, ${escape($session.user.name)}!</h1>
            <p>Your email is ${escape($session.user.email)}</p><br>
            <button class="${"svelte-f1jmza"}">Get geolocation </button> <br><br><br>
        
        ${validate_component(Geolocation, "Geolocation").$$render($$result, { getPosition }, {}, {
    default: ({ coords, loading, success, error, notSupported }) => {
      return `${notSupported ? `Your browser does not support the Geolocation API.` : `${loading ? `Loading...` : ``}
            ${success ? `${escape(JSON.stringify(coords))}` : ``}
            ${error ? `An error occurred. ${escape(error.code)} ${escape(error.message)}` : ``}`}`;
    }
  })}</div></div>
</body>`;
});
export { Routes as default, load };
