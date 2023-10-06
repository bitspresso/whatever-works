use std::sync::atomic::{AtomicU64, Ordering};

static COUNTER: AtomicU64 = AtomicU64::new(0);
static INTERVAL: AtomicU64 = AtomicU64::new(0);

#[ic_cdk::query]
fn counter() -> u64 {
    COUNTER.load(Ordering::Relaxed);
}

#[ic_cdk::update]
fn fetch(evm_id: Principal) {
    ic_cdk_timers::set_timer_interval(INTERVAL.load(Ordering::Relaxed), || {
        ic_cdk::call(evm_id, "get_pending", ());

        /// load to local processing queue
    });
}

#[ic_cdk::init]
fn init(frequency_in_seconds: u64) {
    let interval = std::time::Duration::from_secs(frequency_in_seconds);

    INTERVAL.fetch_add(interval, Ordering::Relaxed);

    ic_cdk_timers::set_timer_interval(interval, || {
        COUNTER.fetch_add(1, Ordering::Relaxed);
    })
}